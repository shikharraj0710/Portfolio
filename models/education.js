import { Schema, models, model } from "mongoose";

const educationSceham = new Schema({
    index :Number,
    title : String,
    subtitle : {
        type : Array,
        default : []
    }
});

const Educations = models.education || model("education", educationSceham);
export default Educations;