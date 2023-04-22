const Chat = require('./Chat');
const User = require('./User');
const Response = require('./Response');

Chat.belongsTo(User, {
    foreignKey: 'user_id',

})

User.hasMany(Chat, {
    foreignKey: 'user_id',
})

Chat.hasMany(Response, {
    foreignKey: 'chat_id',
})

Response.belongsTo(Chat, {
    foreignKey: 'chat_id',
})

User.hasMany(Response, {
    foreignKey: 'user_id',
})

Response.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = {User, Response, Chat}
