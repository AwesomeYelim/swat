import Image from "next/image";
import path from "path";
import fs from "fs";
import Link from "next/link";
import "./style.css";

async function getImages() {
  const imagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "dict_img"
  );
  const imageFiles = fs.readdirSync(imagesDirectory);
  return imageFiles;
}

export default async function Dict() {
  const images = await getImages();
  return (
    <div className="dict_part">
      <Image
        className="title_img"
        src="/images/swat_title.svg"
        alt="title"
        loading="eager"
        priority
        width={297}
        height={66}
      />
      <ul>
        {images
          .sort((a: string, b: string) => {
            const match = (fileName: string) => fileName.match(/^(\d+)_/)?.[1];
            return +(match(a) as string) - +(match(b) as string);
          })
          .map((fileName) => {
            const match = fileName.match(/^(\d+)_/);
            if (match) {
              return (
                <Link key={fileName} href={`/dict/${match[1]}`}>
                  <li className="image-list-item">
                    <Image
                      key={fileName}
                      src={`/images/dict_img/${fileName}`} // Public 폴더 안의 이미지 경로
                      alt={fileName}
                      width={120}
                      height={100}
                      objectFit="contain"
                      layout="fixed"
                    />
                  </li>
                </Link>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
}
