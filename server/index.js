const express = require('express');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
searchRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);