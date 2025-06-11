require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = 5000;
const host = 'localhost';

app.listen(PORT, host, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});



