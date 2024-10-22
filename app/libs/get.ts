// lib/getImages.ts
import path from "path";
import fs from "fs";

export async function getImages() {
  const filePath = path.join(process.cwd(), "public", "images", "dict_img");
  const imageFiles = fs.readdirSync(filePath).sort(
    (a: string, b: string) => {
      const match = (fileName: string) => fileName.match(/^(\d+)_/)?.[1];
      return +(match(a) as string) - +(match(b) as string);
    }
  );
  return imageFiles;
}

export async function getDetail() {
  const filePath = path.join(process.cwd(), "app", "data", "detail.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export function getData(argPath: string[]) {
  const filePath = path.join(process.cwd(), ...argPath);
  return fs.readdirSync(filePath);
}
