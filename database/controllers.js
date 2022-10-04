import Visitors  from "../models/visitor";
import Educations from "../models/education";
import Skills from "../models/skills";
import Experience from "../models/experience";
import Projects from "../models/projects";

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
export async function getSkills(req, res, method) {
    try {
        const skills = await Skills.find({})
        if (!skills) return res.status(404).json({ method, error: "No Data Found!!!" })
        return res.status(200).json({ method, data: skills })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}
export async function addSkill(req, res, method) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" })
        Skills.create(formData, function (err, data) {
            return res.status(200).json({ method, message: "Skill Added Successfully" })
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}

export async function getExperiences(req, res, method) {
    try {
        const experiences = await Experience.find({})
        if (!experiences) return res.status(404).json({ method, error: "No Data Found!!!" })
        return res.status(200).json({ method, data: experiences })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}
export async function addExperience(req, res, method) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" })
        Experience.create(formData, function (err, data) {
            return res.status(200).json({ method, message: "Experience Added Successfully" })
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}

export async function getProjects(req, res, method) {
    try {
        const projects = await Projects.find({})
        if (!projects) return res.status(404).json({ method, error: "No Data Found!!!" })
        return res.status(200).json({ method, data: projects })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}
export async function addProject(req, res, method) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" })
        Projects.create(formData, function (err, data) {
            return res.status(200).json({ method, message: "Project Added Successfully" })
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}