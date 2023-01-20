import { Schema, models, model } from "mongoose";

const educationSchema = new Schema({
    index : Number,
    course : String,
    college : String,
    percentage : String,
    session : String
});

const Educations = models.education || model("education", educationSchema);
export default Educations;