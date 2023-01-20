import { Schema, models, model } from "mongoose";

export const skillSchema = new Schema({
    index: Number,
    skill: String,
    progress: String
});

const Skills = models.skill || model("skill", skillSchema);
export default Skills;