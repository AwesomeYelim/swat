import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Apply() {
  return (
    <div className="ar_wrap">
      <div className="notice">
        *안드로이드 OS에서만 작동합니다.
        <br />
        아이폰 사용자 분들은 아래
        <br />
        안드로이드 폰을 사용해주세요!
      </div>
      <div className="down_wrap">
        <Image
          className="download_img"
          src="/images/download.svg"
          alt="download"
          loading="eager"
          priority
          width={38}
          height={47}
        />
        <span className="find_bug">전시장속 숨은 벌레잡기</span>
        <Link className="download" href="/apk/build.apk.zip" download>
          다운로드 / Download
        </Link>
        <span>only for android</span>
      </div>
      <div>
        *본 어플은 세종대학교 2024
        <br />
        졸업전시 전시장에서만 이용
        <br />
        가능합니다.
      </div>
    </div>
  );
}
