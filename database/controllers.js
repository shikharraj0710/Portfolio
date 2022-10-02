import Visitors  from "../models/visitor";
import Educations from "../models/education";

export async function getVisitors(req, res, method) {
    try {
        const visitors = await Visitors.find({})
        if (!visitors) return res.status(404).json({ method, error: "No Data Found!!!" })
        return res.status(200).json({ method, data: visitors })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}

export async function addVisitor(req, res, method) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" })
        Visitors.create(formData, function (err, data) {
            return res.status(200).json({ method, message: "Visitor info Added Successfully" })
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}

export async function getEducations(req, res, method) {
    try {
        const educations = await Educations.find({})
        if (!educations) return res.status(404).json({ method, error: "No Data Found!!!" })
        return res.status(200).json({ method, data: educations })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}
export async function addEducation(req, res, method) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" })
        Educations.create(formData, function (err, data) {
            return res.status(200).json({ method, message: "Education info Added Successfully" })
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}