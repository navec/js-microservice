const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const UserApi = require('./datasources/user');
const TvMazeApi = require('./datasources/tv-maze');


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        userApi: new UserApi(),
        tvMazeApi: new TvMazeApi(),
    })

});

apolloServer.listen(8000, (req, res) =>{
    console.log('Listening on port 8000');
});
