import React from "react";
import classes from "./mini-card.module.css";

export default function MiniCard({
  title,
  desc,
  onClick,
  buttonText = "find out",
  Icon,
}) {
  return (
    <div className="relative rounded-[15px] w-[296px] h-[173px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-[#3a6b64] p-4">
      <div className="flex items-center justify-center gap-2 mb-2">
        {Icon && <Icon size={40}/>}
        <h2 className=" font-bold text-lg">
          {title}
        </h2>
      </div>
      <div className={classes.body}>{desc}</div>
      <div className="absolute bottom-2 right-2">
        <button className="text-blue-500 font-semibold" onClick={onClick}>
          {buttonText} &gt;
        </button>
      </div>
    </div>
  );
}
