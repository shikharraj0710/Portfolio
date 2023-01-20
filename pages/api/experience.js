import connectMongo from "../../database/conn";
import { addExperience, deleteExperience, editExperience, getExperiences, getSingleExperience } from "../../database/controllers";

export default async function handler(req, res) {
  await connectMongo().catch(() =>
    res.status(405).json({ error: "Error in connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      const { id } = req.query;
      id ? getSingleExperience(id, res, method) : getExperiences(req, res, method)
      break;
    case "POST":
      addExperience(req, res, method);
      break;
    case "PUT":
      editExperience(req, res, method);
      break;
    case "DELETE":
      deleteExperience(req, res, method);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
