module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: DataTypes.STRING,
      name: DataTypes.STRING
    });
  


    User.associate = function(models) {

        User.hasMany(models.Device, {
          onDelete: "cascade"
        });
      };
      
  
    return User;
  };