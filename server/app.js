require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const allowedOrigins = [
  'http://localhost:5173',                  // for local frontend dev
  'https://authentication-drab-alpha.vercel.app/'        // replace with your actual deployed frontend URL
];

// ✅ CORS setup
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed from this origin'));
    }
  },
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

  


