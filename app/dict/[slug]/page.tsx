import Image from "next/image";
import { redirect } from "next/navigation";
import { getImages } from "../page";
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
  const slugNumber = parseInt(params.slug, 10);

  const matchingImage = images.find((fileName) => {
    const match = fileName.match(/^(\d+)_/);
    return match && parseInt(match[1], 10) === slugNumber;
  });
  const imgNumber = (imgName: string) => imgName?.match(/^(\d+)_/)?.[1];
  const imgName = matchingImage?.match(/^[0-9]+_([가-힣0-9]+).png$/)?.[1];

  return (
    <>
      <div className="detail_wrap">
        <div className="detail_page">
          {matchingImage ? (
            <>
              <Image
                src={`/images/dict_img/${matchingImage}`}
                alt={matchingImage}
                width={100}
                height={170}
              />
              <h3>
                {imgName}
                <span></span>
              </h3>
              <div className="detail">
                <p>
                  학명<span>Jjirasidae Heungsinous Jummailsus</span>
                </p>
                <p>
                  분류<span>전단과 흥신속 아줌마일수충</span>
                </p>
                <p>
                  유형<span>꼬마 명함형</span>
                </p>
                <p>
                  서식지<span>주로 아파트 단지</span>
                </p>
              </div>
            </>
          ) : (
            <p>해당 이미지를 찾을 수 없습니다.</p>
          )}
        </div>
        <div className="bottom_wrap">
          {images.map((imgName) => {
            return (
              <Link className="bottom" key={imgName} href={`/dict/${imgNumber(imgName)}`}>
                <Image
                  src={`/images/dict_img/${imgName}`}
                  alt={imgName}
                  width={40}
                  height={50}
                  layout="fixed"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
