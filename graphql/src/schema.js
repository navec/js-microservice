const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        users: [User]
    }

    type User {
        id: ID
        phone_number: String
        email: String
        region: String
        country: String
        city: String
        shows: [Show]
    }

    type Show {
        id: ID!
        name: String
        genre: [String]
        language: String
        officialSite: String
        status: String
        seasons: [Season]
    }
    
    type Season {
        id: ID!
        url: String
        number: Int
        name: String
        episodeOrder: Int
        premiereDate: String
        endDate: String
        summary: String
    }
    
    type Episode {
        name: String
        description: String
    }
`;

module.exports = typeDefs;
