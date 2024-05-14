const collection = require('../config/db.js');
const bcrypt = require('bcrypt');

// register Auth Controller
const RegisterUser = async (req, res) => {
    const data = {
        username: req.body.username, email: req.body.email, password: req.body.password,
    };

    let userData;

    // trying to find an existing user first
    const existingUser = await collection.findOne({username: data.username});

    try {
        if (existingUser) {
            res.send('Try another name user already exists');
        } else {
            // Hashing the password
            const salt = 12;
            const hashPass = await bcrypt.hash(data.password, salt);
            data.password = hashPass;
            userData = await collection.create(data);
        }
        res.json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

// Login Auth Controller
const LoginUser = async (req, res) => {
    try {
        const user = await collection.findOne({username: req.body.username});

        if (!user) {
            res.status(401).json({
                isLoggedIn: false, message: 'User not found. You are not you',
            });
            return;
        }

        const isCorrectPass = await bcrypt.compare(req.body.password, user.password);

        if (req.body.email !== user.email) {
            res.status(401).json({
                isLoggedIn: false, message: 'Incorrect Credentials',
            });
            return;
        }

        if (!isCorrectPass) {
            res.status(401).json({
                isLoggedIn: false, message: 'How Can you forget your password bro',
            });
            return;
        }
        res.json({isLoggedIn: true, user: user});
    } catch (err) {
        console.error(err);
        res.status(500).json({
            isLoggedIn: false, message: 'Internal Server Error',
        });
    }
};

module.exports = {RegisterUser, LoginUser};
