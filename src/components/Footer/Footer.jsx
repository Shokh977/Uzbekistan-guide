import classes from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cols}>
        <div className={classes.a}>
        <h1>Uzbekistan</h1>
        <p>
          Explore spots to travel. Experience new culture and enjoy delicius
          meals.
        </p>
        </div>

      <div className={classes.b}>
        <h2>Company</h2>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Careers</Link>
          </li>{" "}
          <li>
            <Link href="/">Mobile</Link>
          </li>
        </ul>
      </div>

      <div className={classes.c }>
        <h2>Company</h2>
        <ul>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Careers</Link>
          </li>{" "}
          <li>
            <Link href="/">Mobile</Link>
          </li>
        </ul>
      </div>

      <div className={classes.d}>
        {" "}
        <h2>Company</h2>
        <ul>
          <li>
            <Link href="/">More</Link>
          </li>
          <li>
            <Link href="/">Careers</Link>
          </li>{" "}
          <li>
            <Link href="/">Mobile</Link>
          </li>
        </ul>
      </div>

      <div className={classes.e}>
        <p>
          <Link href='/'>Follow Us</Link>
        </p>
      </div>
      </div>
      <p>All rights reserved @ Uzbekistan-guide.com</p>
    </div>
  );
};
