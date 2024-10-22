import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image className="main_img" src="/images/main.svg" alt="main" loading="eager" priority width={348} height={382} />
      <nav>
        <a href="/dict">
          벌레도감<span>Bug Guide</span>
        </a>
        <a href="/about">
          도시기생충이란<span>what is an urban parasite?</span>
        </a>
        <a href="/arverion">
          AR 벌레잡기<span>AR app (only Android)</span>
        </a>
        <a href="/moving">
          무빙포스터<span>Moving Poster</span>
        </a>
      </nav>
    </>
  );
}
