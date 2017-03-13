module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', { 
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_sign_in: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    classMethods: {
      associate: function(models) {
        users.belongsTo(models.roles, {as: 'roles', foreignKey: 'role_id'});
      }
    },
    timestamps: false
  });

  return users;
};
