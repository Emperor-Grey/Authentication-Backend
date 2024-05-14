const express = require('express');
const collection = require('./src/config/db.js');
const path = require('path');
const userRoutes = require('./src/routes/auth.js');

const app = express();
const PORT = 5000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.urlencoded({urlencoded: false}));
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    console.log('Home router has been reached');
    res.send('HOME PAGE');
});

app.listen(PORT, () => console.log(`Server is listening in http://localhost:${PORT}`));
