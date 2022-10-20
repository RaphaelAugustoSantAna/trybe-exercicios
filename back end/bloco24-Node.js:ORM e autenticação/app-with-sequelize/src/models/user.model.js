const UserModel = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNum: DataTypes.STRING,
    });

    return User;
}

module.exports = UserModel;
