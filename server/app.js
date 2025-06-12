require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));

const allowedOrigins = [
    'http://localhost:5173',             // local dev
    'https://your-frontend.onrender.com' // your deployed frontend
  ];
app.use(cors({
    origin: allowedOrigins,

    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  


