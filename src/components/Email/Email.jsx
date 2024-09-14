import Button from "@/UI/Button";
import classes from "./email.module.css";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { LuMessagesSquare } from "react-icons/lu";
import { TbMessageMinus } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";


export default function Email() {
  return (
    <div class={classes.container}>
      <div className={classes.box}>
        <div className={classes.icons}>
           {/* <SiMinutemailer className={classes.a} size={150}/> */}
           {/* <LuMessagesSquare  className={classes.b}  size={120}/> */}
           <TbMessageMinus  className={classes.c}  size={170}/>
           {/* <BiLogoGmail  className={classes.d}  size={100}/> */}
        </div>
        <div className={classes.title}>
          <h1>Subscribe to get latest news and beneficial offers about Us</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.input}>
            <MdEmail size={20} />
            <input type="text" name="email" placeholder="Your Email"/>
          </div>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
