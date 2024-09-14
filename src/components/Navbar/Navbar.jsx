import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import classes from './navbar.module.css'
import { LuLanguages } from "react-icons/lu";

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>Uzbekistan</h1>
      <div>
        <ul className={classes.lists}>
          <li className={classes.links}>
            <Link href='/'>About</Link>
          </li>
          <li className={classes.links}>
            <Link  href='/'>News</Link>
          </li>
          <li className={classes.links}>
            <Link  href='/'>Shop</Link>
          </li>
          <li className={classes.links}>
            <Link  href='/'>Spots</Link>
          </li>
          <li className={classes.links}>
            <Link  href='/'>Culture</Link>
          </li>
        </ul>
      </div>
      <div className={classes.user}>
        <div className={classes.language}><LuLanguages size={20}/></div>
        <FaRegUser size={20} />
      </div>
    </nav>
  );
};
