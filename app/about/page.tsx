"use client"; // 클라이언트 측에서 동작하는 컴포넌트로 설정
import { useEffect, useRef } from "react";
import Image from "next/image";
import "./style.css";

export default function About() {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // 뷰포트에 들어왔을 때 'visible' 클래스 추가
          }
        });
      },
      {
        threshold: 0.2, // 요소의 20%가 보일 때 트리거
      }
    );

    // 관찰할 요소들 추가
    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // 컴포넌트가 사라질 때 observer 해제
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about_wrap">
      <div
        ref={(el: HTMLDivElement) => {
          elementsRef.current[0] = el;
        }}
        className="fade-in"
      >
        <Image
          className="what_img"
          src="/images/whatisswat.svg"
          alt="whatisswat"
          loading="eager"
          priority
          width={329}
          height={100}
        />
      </div>
      <div
        ref={(el: HTMLDivElement) => {
          elementsRef.current[1] = el;
        }}
        className="fade-in"
      >
        <Image
          className="main_img"
          src="/images/main.svg"
          alt="about"
          loading="eager"
          priority
          width={348}
          height={382}
        />
      </div>
      <div
        ref={(el: HTMLDivElement) => {
          elementsRef.current[2] = el;
        }}
        className="yellow fade-in"
      >
        <span>
          도시에
          <br />
          무임승차하는
          <br />
          불법 광고물들
        </span>
        <Image
          className="human_img"
          src="/images/human.svg"
          alt="human"
          loading="eager"
          priority
          width={324}
          height={328}
        />
      </div>
      <div
        ref={(el: HTMLDivElement) => {
          elementsRef.current[3] = el;
        }}
        className="fade-in"
      >
        <span className="explaining">
          사회 발전에 따라 광고 환경이 변하고
          <br />
          도시 환경도 많은 변화를 겪었지만
          <br />
          불법광고물들이 도시의 길거리, 건물, 공공기물,
          <br />
          가로등, 벤치에 널부러져 있고 이는 도시의 미관을
          <br />
          해친다 이들은 쉽게 떨어지지도 않으며 그양이
          <br />
          너무 많아 처리에도 어려움이 있다.
        </span>
      </div>
      <div
        ref={(el: HTMLDivElement) => {
          elementsRef.current[4] = el;
        }}
        className="fade-in"
      >
        <div className="rectangle">
          <Image
            className="rectangle_img"
            src="/images/rectangle.svg"
            alt="rectangle"
            loading="eager"
            priority
            width={520}
            height={350}
          />
        </div>
      </div>
      <div
        ref={(el: HTMLDivElement) => {
          elementsRef.current[5] = el;
        }}
        className="slogan fade-in"
      >
        “ 디자인 학도로서 도시의 미관에
        <br /> 기생하는 기생충들을 방역하자 ”
      </div>
      <div
        ref={(el: HTMLDivElement) => {
          elementsRef.current[6] = el;
        }}
        className="fade-in"
      >
        <Image
          className="campaign_img"
          src="/images/campaign.svg"
          alt="campaign"
          loading="eager"
          priority
          width={329}
          height={100}
        />
      </div>
      <div
        ref={(el: HTMLDivElement) => {
          elementsRef.current[7] = el;
        }}
        className="conclusion fade-in"
      >
        누구보다 안구 테러에 민감한 우리,
        <br /> 디자이너의 작품에 무임승차하고 <br />
        치워도 치워도 다시 나타나는 수많은 기생충들.
        <br /> 디자이너로서 이러한 세태를
        <br /> 묵과할 수만은 없다.
      </div>
    </div>
  );
}
