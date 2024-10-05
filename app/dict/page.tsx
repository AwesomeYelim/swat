import Image from "next/image";
import { getImages } from "../libs/callImage";
import Link from "next/link";
import "./style.css";


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
