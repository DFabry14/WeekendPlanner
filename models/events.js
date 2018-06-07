module.exports = function(sequelize, DataTypes){
    var UserEvent = sequelize.define("UserEvent", {
        eventName: DataTypes.STRING,
        eventCity: DataTypes.STRING,
        eventTrueUser: DataTypes.STRING
    });
    return UserEvent
};