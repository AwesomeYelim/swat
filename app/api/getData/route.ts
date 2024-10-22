import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const imagesPath = path.join(process.cwd(), "public", "images", "poster");

  try {
    const files = fs.readdirSync(imagesPath);
    const imageFiles = files.map((file) => `/images/poster/${file}`);

    return NextResponse.json({ data: imageFiles });
  } catch (error) {
    return NextResponse.json({ error: "Failed to load images" }, { status: 500 });
  }
}
