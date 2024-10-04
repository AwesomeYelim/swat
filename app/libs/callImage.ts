// lib/getImages.ts
import path from "path";
import fs from "fs";

export async function getImages() {
  const imagesDirectory = path.join(process.cwd(), "public", "images", "dict_img");
  const imageFiles = fs.readdirSync(imagesDirectory);
  return imageFiles;
}