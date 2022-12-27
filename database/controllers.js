import Visitors from "../models/visitor";
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
        if (!formData) return res.status(404).json({ method, error: "Form Data not found", statusCode: 404 })
        Visitors.create(formData, function (err, data) {
            return res.status(200).json({ method, message: "Visitor info Added Successfully", statusCode: 200 })
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
            return res.status(201).json({ method, message: "Education info Added Successfully" })
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
            return res.status(201).json({ method, message: "Skill Added Successfully" })
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}
export async function editSkill(req, res, method) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" });
        const { selectedSkillId: id, newSkillName, newRating } = formData;
        Skills.findByIdAndUpdate(id, { skill: newSkillName, progress: newRating }, function (err, docs) {
            if (err) {
                return res.status(500).json({ method, error: "Error while updating skill" })
            }
            else {
                return res.status(201).json({ method, message: "Skill Edited Successfully", data: docs })
            }
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}

export async function deleteSkill(req, res, method) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" });
        const { id } = formData;
        Skills.findByIdAndDelete(id, function (err, docs) {
            if (err) {
                return res.status(500).json({ method, error: "Error while deleting skill" })
            }
            else {
                return res.status(201).json({ method, message: "Skill Deleted Successfully", data: docs })
            }
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

export async function getSingleExperience(id, res, method) {
    try {
        Experience.findById(id, function (err, docs) {
            if (err) {
                return res.status(404).json({ method, error: "No Data Found!!!" })
            } else {
                return res.status(200).json({ method, data: docs })
            }
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}

export async function addExperience(req, res, method) {
    try {
        const { title, duration, organization: institute, designation: expertise } = req.body;
        const formData = { title, duration, institute, expertise };
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" })
        Experience.create(formData, function (err, docs) {
            if (err) return res.status(404).json({ error: err })
            return res.status(200).json({ method, message: "Experience Added Successfully", data: docs })
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}

export async function editExperience(req, res, method) {
    try {
        const formData = req.body;
        const { id } = req.query;
        console.log(id)
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" });
        const { title, duration, organization: institute, designation: expertise } = formData;
        Experience.findByIdAndUpdate({ _id: id }, { title, duration, institute, expertise }, { new: true }, function (err, docs) {
            if (err) {
                console.log(err);
                return res.status(500).json({ method, error: "Error while updating experience" })
            }
            else {
                console.log(docs)
                return res.status(201).json({ method, message: "Experience Edited Successfully", data: docs })
            }
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}

export async function deleteExperience(req, res, method) {
    try {
        const formData = req.body;
        const { id } = req.query;
        if (!formData) return res.status(404).json({ method, error: "Form Data not found" });
        const { confirmText } = formData;
        if (confirmText !== "DELETE") return res.status(403).json({ method, error: "Confirm Text not matched" })
        Experience.findByIdAndDelete(id, { new: true }, function (err, docs) {
            if (err) {
                return res.status(500).json({ method, error: "Error while deleting Experience" })
            }
            else {
                return res.status(201).json({ method, message: "Experience Deleted Successfully", data: docs })
            }
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
            return res.status(201).json({ method, message: "Project Added Successfully" })
        })
    } catch (errors) {
        res.status(404).json({ error: errors })
    }
}