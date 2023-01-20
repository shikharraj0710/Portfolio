import connectMongo from "../../database/conn";
import { addVisitor, getVisitors } from "../../database/controllers"

export default async function handler(req, res) {
    await connectMongo().catch(() => res.status(405).json({ error: "Error in connection" }))

    const { method } = req;

    switch (method) {
        case "GET": getVisitors(req, res, method)
            break;
        case "POST": addVisitor(req, res, method)
            break;
        default: res.setHeader("Allow", ["GET", "POST"])
            res.status(405).end(`Method ${method} not allowed`)
    }
}