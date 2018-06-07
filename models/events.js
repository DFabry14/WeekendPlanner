module.exports = function(sequelize, DataTypes){
    var UserEvent = sequelize.define("UserEvent", {
        eventName: DataTypes.STRING,
        eventDate: DataTypes.DATEONLY,
        eventTime: DataTypes.TIME,
        eventURL: DataTypes.STRING,
        eventCity: DataTypes.STRING,
        eventTrueUser: DataTypes.STRING
    });
    return UserEvent
};