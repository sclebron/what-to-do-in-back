const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Activity {
        _id: ID
        title: String
        image: String
        description: String
        details: String
        webUrl: String
        length: String
        distance: String
        place: String
        season: String
    }
    type Question {
        _id: ID
        question: String
        option1: String
        option2: String
        option3: String
        option4: String
    }
    type Query {
        activities: [Activity]!
        activity(name: String!): Activity
        questions: [Question]!
        question(name: String!): Question
    }
`;

module.exports = typeDefs;