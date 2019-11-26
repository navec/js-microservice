const {RESTDataSource} = require('apollo-datasource-rest');

class TvMazeApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://api.tvmaze.com/';
    }

    async getAllSeason({showId}) {
        return Promise.all(await this.get(`shows/${showId}/seasons`));
    }

    async getAllShows({ movieIds }) {
        const response = await Promise.all( movieIds.map(id => this.getShowById(id)) );
        return response.map(show => this.showReducer(show));
    }

    async getShowById(id) {
        return await this.get(`shows/${id}`)
    }

    showReducer(show) {
        return {
            id: show.id,
            name: show.name,
            genre: show.genre,
            language: show.language,
            officialSite: show.officialSite,
            status: show.status,
            seasons: show.id,
        }
    }
}

module.exports = TvMazeApi;
