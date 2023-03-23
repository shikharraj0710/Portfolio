import connectMongo from "../../database/conn";
import { addEducation, deleteEducation, editEducation, getEducations, getSingleEducation } from "../../database/controllers";

export default async function handler(req, res) {
  await connectMongo().catch(() =>
    res.status(405).json({ error: "Error in connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      const { id } = req.query;
      console.log(id)
      id ? getSingleEducation(id, res, method) : getEducations(req, res, method)
      break;
    case "POST":
      addEducation(req, res, method);
      break;
    case "PUT":
      editEducation(req, res, method);
      break;
    case "DELETE":
      deleteEducation(req, res, method);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
