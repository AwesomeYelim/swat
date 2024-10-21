import Image from "next/image";
import { redirect } from "next/navigation";
import { getImages, getData } from "../../libs/get";
import Link from "next/link";
import "./style.css";

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
  const details = await getData();
  const slugNumber = parseInt(params.slug, 10);

  const matchingImage = images.find((fileName) => {
    const match = fileName.match(/^(\d+)_/);
    return match && parseInt(match[1], 10) === slugNumber;
  });

  const [imgNumber, imgName] = matchingImage?.split("_") as string[];
  const target = details[+imgNumber - 1];
  const pureImageName = imgName.substring(0, imgName.lastIndexOf("."));
  return (
    <div className="detail_wrap">
      <div className="detail_page">
        {matchingImage ? (
          <>
            <Image
              src={`/images/dict_img/${matchingImage}`}
              alt={matchingImage}
              width={200}
              height={140}
              layout="fixed"
            />
            <h3>
              <span>{pureImageName}</span>
            </h3>
            <div className="detail">
              <p>
                학명<span>{target.fullName}</span>
              </p>
              <p>
                분류<span>{target.category}</span>
              </p>
              <p>
                유형<span>{target.type}</span>
              </p>
              <p>
                서식지<span>{target.habitat}</span>
              </p>
            </div>
          </>
        ) : (
          <p>해당 이미지를 찾을 수 없습니다.</p>
        )}
      </div>
      <div className="bottom_wrap">
        {images.map((imgName, i) => {
          return (
            <Link className="bottom" key={pureImageName} href={`/dict/${i + 1}`}>
              <Image src={`/images/dict_img/${imgName}`} alt={pureImageName} width={40} height={50} layout="fixed" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
