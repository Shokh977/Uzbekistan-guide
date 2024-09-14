import MiniCard from "@/UI/mini-card/MiniCard";
import React from "react";
import { IoPartlySunnySharp } from "react-icons/io5";
import { RiTodoFill } from "react-icons/ri";
import { IoCalendarNumber } from "react-icons/io5";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdLocalHotel } from "react-icons/md";
import { FaShopify } from "react-icons/fa";


export default function Services() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <MiniCard
        Icon = {IoPartlySunnySharp}
        title="Hot wheather"
        desc="check out how good weather is today "
        buttonText="More"
      />
      <MiniCard
        Icon ={RiTodoFill}
        title="To Do"
        desc="Plan your trip by just one click!"
        buttonText="find out"
      />
      <MiniCard
      Icon={IoCalendarNumber}
        title="Holidays"
        desc="Check out special days of Uzbekistan"
        buttonText="find out"
      />{" "}
      <MiniCard
      Icon={IoRestaurantSharp}
        title="Restaurant"
        desc="Check out restaurants and traditional dishes you can enjoy!"
        buttonText="find out"
      />
      <MiniCard
      Icon={MdLocalHotel}
        title="Hotels"
        desc="Check out affordable and elegant places to spend your night"
        buttonText="find out"
      />
         <MiniCard
      Icon={FaShopify}
        title="Shop online"
        desc="Order and Make your trip last forever!"
        buttonText="find out"
      />
    </div>
  );
}
