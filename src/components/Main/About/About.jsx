'use client'
import classes from "./about.module.css";
import Image from 'next/image'
import Map from '../../../UI/Map/Map.jsx'
import Card from "@/UI/Card/Card";
import img from '@/../../public/assets/hero/khiva.jpg'
import Services from "./Services/Services";

export const About = () => {
  return (
    <div className={classes.container}>     
      <h1>Regions of Uzbekistan</h1>

      <div className={classes.map}>
        <Map/>
      </div>
      <div className={classes.card}
      > <Card
        image={img}
        title="Sample Title"
        description="This is a sample description. It will be truncated if it is too long..."
        buttonText="More"
        onClick={() => alert('Card Clicked!')}
      /></div>


       <Services/>
    </div>
  );
};
