module.exports = function(sequelize, DataTypes) {
    var Device = sequelize.define("Device", {
      user_name: DataTypes.STRING,
      name: DataTypes.STRING
    });
  

    Device.associate = function(models) {

        Device.hasMany(models.Reading, {
          onDelete: "cascade"
        });
        Device.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
      };
  
    return Device;
  };