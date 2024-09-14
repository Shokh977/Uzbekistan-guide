import Button from "@/UI/Button";
import ImageSlideshow from "../Slideshow/SlideShow";
import classes from "./hero.module.css";
import { MdPlayArrow } from "react-icons/md";

export const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.slideShowContainer}>
        <ImageSlideshow />
      </div>
      <div className={classes.blurCard}>
        <div className={classes.line}></div>
        <div>
          <p className={classes.header}>Find out more</p>
          <h1 className={classes.title}>Samarkand</h1>
          <p className={classes.footer}>History talks</p>
        </div>
      </div>
      <Button className={`${classes.heroBtn} flex justify-center items-center`}> Discover <MdPlayArrow size={30}/></Button>
    </div>
  );
};
