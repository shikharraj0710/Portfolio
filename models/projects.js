import { Schema, models, model } from "mongoose";

const projectSchema = new Schema({
    title : String,
    duration : String,
    desc : [{type : String}],
    skill : [{type : String}],
    github : String,
    visit : String,
    index : Number
});

const Projects = models.project || model("project", projectSchema);
export default Projects;