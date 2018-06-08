module.exports = function(sequelize, DataTypes){
    var UserEvent = sequelize.define("UserEvent", {
        eventName: DataTypes.STRING,
        eventCity: DataTypes.STRING,
        eventURL: DataTypes.STRING,
        eventTrueUser: DataTypes.STRING
    });
    return UserEvent
};