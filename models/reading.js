module.exports = function(sequelize, DataTypes) {
    var Reading = sequelize.define("Reading", {
      Time: DataTypes.TIME,
      Date: DataTypes.DATE,
      MAC: DataTypes.STRING,
      PM1: DataTypes.FLOAT,
      PM25: DataTypes.FLOAT,
      PM10: DataTypes.FLOAT,
      Temp: DataTypes.FLOAT,
      Hum: DataTypes.FLOAT,
      Lat: DataTypes.FLOAT,
      Lon: DataTypes.FLOAT,
      Alt: DataTypes.FLOAT,
      CO: DataTypes.INTEGER,
      NO: DataTypes.INTEGER,
    });
  
    Reading.associate = function(models) {
      // Associating Reading with Posts
      // When an Reading is deleted, also delete any associated Posts
      Reading.belongsTo(models.Device, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Reading;
  };
  