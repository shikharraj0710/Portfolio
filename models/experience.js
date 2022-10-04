import { Schema, models, model } from "mongoose";

const experienceSchema = new Schema({
    index : Number,
    title : String,
    duration : String,
    institute : String,
    expertise : String
});

const Experience = models.experience || model("experience", experienceSchema);
export default Experience;