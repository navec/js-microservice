const express = require('express');
const router = express.Router();

const UserAPI = require('./component/user');
const userAPI = new UserAPI();



router.use(express.json());

router.get('/users', (req, res) => {
    response(res, userAPI.getAllUsers());
});

router.get('/user/:id', (req, res) => {
    response(res, userAPI.getUserById(req.params.id));
});

router.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = req.body;
    response(res, userAPI.updateUserById(userId, user));
});

router.post('/user', (req, res) => {
    const user = userAPI.createUser(req.body);
    response(res, user)
});

router.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = userAPI.deleteUser(userId);
    response(res, user);
});

const response = (res, data) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
};



module.exports = router;
