const express = require('express');
require('dotenv').config();
const app = express();
const session = require('express-session');
var methodOverride = require('method-override');
const PORT = process.env.PORT || 8080;
const { dbConnection } = require('./config/config.js');
const routes = require('./routes/productRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const authRoutes= require('./routes/authRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
const {authMiddleware, authApiMiddleware} = require('./middlewares/authMiddleware.js');
const { api } = require('./config/cloudinary.js');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
  username: "",
  isAuthenticated: false,
  secret: process.env.SESSION_SECRET || "defaultsecret",
  resave: true,
  saveUninitialized: true
}))

// User Routes
app.use('/', routes);

// API Routes
app.use('/api', authApiMiddleware, apiRoutes);

// Login Routes
app.use('/login', authRoutes);

// Admin Routes
app.use(methodOverride('_method'))
app.use('/admin',authMiddleware, adminRoutes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));