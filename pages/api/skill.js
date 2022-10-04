import connectMongo from "../../database/conn";
import { getSkills, addSkill } from "../../database/controllers"

export default async function handler(req, res) {
  await connectMongo().catch(() =>
    res.status(405).json({ error: "Error in connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getSkills(req, res, method);
      break;
    case "POST":
      addSkill(req, res, method);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
