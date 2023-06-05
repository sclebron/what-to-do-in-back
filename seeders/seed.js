const db = require("../config/connection");

const { Activity, Question } = require("../models");

const activitySeeds = require("./activitySeeds.json");
const questionSeeds = require("./questionSeeds.json");

db.once("open", async() => {
    try {
        await Activity.deleteMany({});
        await Question.deleteMany({});

        await Activity.create(activitySeeds);
        await Question.create(questionSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Data seeded! 🌱");
    process.exit(0);
});