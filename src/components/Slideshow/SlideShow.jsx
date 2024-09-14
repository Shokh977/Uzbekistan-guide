"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import  classes from "./slideShow.module.css"

import khiva from "../../../public/assets/hero/khiva.jpg";
import noman from "../../../public/assets/hero/Noman.jpg";

const images = [
  { image: khiva, alt: "" },
  { image: noman, alt: "noman" },
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={classes.slideshow}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            className={index === currentImageIndex ? classes.active : ""}
            alt={image.alt}
          />
        ))}
      </div>
    );
  }