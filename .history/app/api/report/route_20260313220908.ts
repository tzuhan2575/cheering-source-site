import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reports.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const file = await fs.readFile(filePath, "utf-8");
    const current = JSON.parse(file);

    const newEntry = {
      id: `report_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...body,
    };

    current.push(newEntry);
    await fs.writeFile(filePath, JSON.stringify(current, null, 2), "utf-8");

    return Response.json({ success: true, data: newEntry });
  } catch (error) {
    console.error(error);
    return new Response("Failed to save report", { status: 500 });
  }
}