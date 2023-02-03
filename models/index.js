const Chat = require('./Chat');
const User = require('./User');
const Response = require('./Response');

Chat.belongsTo(User, {
    foreignKey: 'userId',

})

User.hasMany(Chat, {
    foreignKey: 'userId',
})

Chat.hasMany(Response, {
    foreignKey: 'chatId',
})

Response.belongsTo(Chat, {
    foreignKey: 'chatId',
})

User.hasMany(Response, {
    foreignKey: 'userId',
})

Response.belongsTo(User, {
    foreignKey: 'userId',
})

module.exports = {User, Response, Chat}