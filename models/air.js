module.exports = function(sequelize, DataTypes) {
    var airQuality = sequelize.define("Air Quality", {
      Time: DataTypes.FLOAT,
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
  
    // airQuality.associate = function(models) {
    //   // Associating airQuality with Posts
    //   // When an airQuality is deleted, also delete any associated Posts
    //   airQuality.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return airQuality;
  };
  