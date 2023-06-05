const { Activity, Question } = require("../models");

const resolvers = {
    Query: {
        activities: async () => {
            return Activity.find();
        },
        activity: async (parent, { activityId }) => {
            return Activity.findOne({ _id: activityId });
        }, 
        questions: async () => {
            return Question.find();
        },
        question: async (parent, { questionId }) => {
            return Question.findOne({ _id: questionId });
        }
    },
    // Mutation: {

    // }
}

module.exports = resolvers;