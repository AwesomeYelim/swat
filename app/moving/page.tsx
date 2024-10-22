"use client";

import Image from "next/image";
import { useState } from "react";
import "./style.css";

export default function Apply() {
  const [images, setImages] = useState<{ list: number[]; selected: string }>({
    list: Array.from({ length: 3 }, (_, index) => index),
    selected: "1_poster",
  });

  return (
    <div className="mv_wrap">
      <div className="selected_wrap">
        <Image
          key={images.selected}
          className="selected_poster"
          src={`/images/poster/${images.selected}.gif`}
          alt="selected_poster"
          loading="eager"
          priority
          width={285}
          height={404}
        />
      </div>
      <div className="poster_list">
        {images.list.map((src) => (
          <Image
            key={src + 1}
            className={`poster_img ${images.selected == `${src + 1}_poster` ? "selected" : ""}`}
            src={`/images/poster/${src + 1}_poster.png`}
            alt="poster"
            loading="eager"
            priority
            width={78}
            height={110}
            onClick={() => {
              setImages({ ...images, selected: `${src + 1}_poster` });
            }}
          />
        ))}
      </div>
    </div>
  );
}
