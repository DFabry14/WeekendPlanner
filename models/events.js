module.exports = function(sequelize, DataTypes){
    var UserEvent = sequelize.define("UserEvent", {
        eventName: DataTypes.STRING,
        eventDate: DataTypes.INTEGER,
        eventTime: DataTypes.INTEGER,
        eventURL: DataTypes.STRING,
        eventCity: DataTypes.STRING
    });
    return UserEvent
};