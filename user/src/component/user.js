const USERS_DATA = require('../../static_data/users-data');

class UserAPI {

    constructor() {
        this.users = USERS_DATA.slice();
    }

    getAllUsers = () => {
        return this.users;
    }

    getUserById = (userId) => {
        return this.users.find(user => user.id === Number.parseInt(userId));
    }

    updateUserById = (userId, user) => {
        this.deleteUser(userId);
        return this.createUser(user);
    }

    createUser = (user) =>{
        this.users.push(user);
        return user;
    }

    deleteUser = (userId) =>{
        const user = this.users.find(user =>  user.id === Number.parseInt(userId));
        const userIndex = this.users.indexOf(user);
        this.users.splice(userIndex, 1);
        return user;
    }
}

module.exports = UserAPI;
