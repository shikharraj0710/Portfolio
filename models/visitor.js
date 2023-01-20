import { Schema, models, model } from "mongoose";

const visitorSchema = new Schema({
    index :Number,
    name : String,
    email : String,
    message : String
});

const Visitors = models.visitor || model("visitor", visitorSchema);
export default Visitors;