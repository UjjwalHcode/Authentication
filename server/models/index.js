const User = require('./user');
const sequelize = require('../config/db');

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    sequelize,
    User
};

