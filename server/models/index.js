const User = require('./user');
const sequelize = require('../config/db');

sequelize.sync().then(() => {
    console.log('Database Connected!');
});

module.exports = {
    sequelize,
    User
};

