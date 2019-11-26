const { RESTDataSource } = require('apollo-datasource-rest');

class UserApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8080';
    }

    async getUsers() {
        const response = await this.get('users');
        return Array.isArray(response) ? response.map(user => this.userReducer(user)) : [];
    }

    userReducer(user) {
        return {
            id: user.id,
            phone_number: user.phone_number,
            email: user.email,
            region: user.region,
            country: user.country,
            city: user.city,
            shows: [1,2,3,4]
        }
    }
}

module.exports = UserApi;
