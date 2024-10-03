import Image from "next/image";
import path from "path";
import fs from "fs";
import { redirect } from "next/navigation";
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

interface Props {
  params: {
    slug: string;
  };
}

export default async function DictDetail({ params }: Props) {
  // slug가 없을 경우 리디렉션
  if (!params.slug) {
    redirect("/dict");
  }

  const images = await getImages();

  const slugNumber = parseInt(params.slug, 10);

  const matchingImage = images.find((fileName) => {
    const match = fileName.match(/^(\d+)_/);
    return match && parseInt(match[1], 10) === slugNumber;
  });

  return (
    <div className="">
      {matchingImage ? (
        <Image
          src={`/images/dict_img/${matchingImage}`}
          alt={matchingImage}
          width={300}
          height={200}
          objectFit="contain"
        />
      ) : (
        <p>해당 이미지를 찾을 수 없습니다.</p>
      )}
    </div>
  );
}
