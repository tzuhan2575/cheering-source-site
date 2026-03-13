import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "embeddings.json");

export async function GET() {
  try {
    const file = await fs.readFile(filePath, "utf-8");
    return Response.json(JSON.parse(file));
  } catch (error) {
    console.error(error);
    return new Response("Failed to read embeddings", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await fs.writeFile(filePath, JSON.stringify(body, null, 2), "utf-8");
    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response("Failed to save embeddings", { status: 500 });
  }
}