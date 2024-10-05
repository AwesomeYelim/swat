// lib/getImages.ts
import path from "path";
import fs from "fs";

export async function getImages() {
  const imagesDirectory = path.join(process.cwd(), "public", "images", "dict_img");
  const imageFiles = fs.readdirSync(imagesDirectory).sort((a: string, b: string) => {
    const match = (fileName: string) => fileName.match(/^(\d+)_/)?.[1];
    return +(match(a) as string) - +(match(b) as string);
  });
  return imageFiles;
}