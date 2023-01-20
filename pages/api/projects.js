import connectMongo from "../../database/conn";
import { getProjects, addProject } from "../../database/controllers";

export default async function handler(req, res) {
  await connectMongo().catch(() =>
    res.status(405).json({ error: "Error in connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
        getProjects(req, res, method);
      break;
    case "POST":
        addProject(req, res, method);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
