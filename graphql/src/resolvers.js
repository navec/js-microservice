const resolvers = {
    Query: {
        users: async (_, __, {dataSources}) =>  await dataSources.userApi.getUsers()
    },
    User:  {
        shows: (context, _, {dataSources}) => {
            return  dataSources.tvMazeApi.getAllShows({movieIds: context.shows});
        }
    },
    Show: {
        seasons: (context, _, {dataSources}) => {
            console.log('Context :: ', context.seasons);
            return dataSources.tvMazeApi.getAllSeason( {showId: context.seasons} );
        }
    }
};

module.exports = resolvers;
