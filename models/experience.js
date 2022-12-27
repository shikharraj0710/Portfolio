import { Schema, models, model } from "mongoose";
import { skillSchema } from "./skills";


const experienceSchema = new Schema({
    index: Number,
    title: String,
    duration: String,
    institute: String,
    expertise: String,
    // skills: [skillSchema]
});

const Experience = models.experience || model("experience", experienceSchema);
export default Experience;