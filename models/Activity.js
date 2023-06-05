const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    image: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    details: {
        type: String, 
        require: true,
        trim: true,
    },
    webUrl: {
        type: String,
        require: true,
        trim: true,
    },
    length: {
        type: String,
        require: true,
        trim: true,
    },
    distance: {
        type: String,
        require: true,
        trim: true,
    },
    place: {
        type: String,
        require: true,
        trim: true,
    },
    season: {
        type: String,
        require: true,
        trim: true,
    }
})

const Activity = model("Activity", activitySchema);

module.exports = Activity;