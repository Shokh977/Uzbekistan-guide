'use client';
import React from 'react';
import Image from 'next/image';


const Card = ({ image, title, description, buttonText = "Discover",className, onClick }) => {
  
  const cut = (string, number) =>{
     if(string.length > number){
      return string.substring(0, number) + '...'
     }
     return string
}

  return (
    <div className={`${className}  && ${ `w-[250px] h-auto bg-white rounded-[15px] shadow-md overflow-hidden flex flex-col`}`}>
      {image && (
        <div className="w-full h-[150px] relative">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-[15px]"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className=" font-bold text-[20px] text-center text-black">
        {cut(title, 15)}
        </h3>
        <p className=" font-semibold text-[16px] text-black/80 line-clamp-3 text-center">
          {cut(description, 60)}
        </p>
        <button
          className="self-end text-blue-500 font-semibold mt-2"
          onClick={onClick}
        >
          {buttonText} &gt;
        </button>
      </div>
    </div>
  );
};

export default Card;
