import React from "react";
import { marqueeItems } from '../../data/data';
import Image from "next/image";

const MarqueeSec = () => {
  return 
    <div>
      <div>
{marqueeItems.map((item,index) => (
        <div className="" key={index}>
          <Image src={"/images/star-shape.svg"} alt="shape" width={30} height={30} />
        <p className="">{item.title}</p>
        </div>
      ))}
      </div>
    </div>
  
};

export default MarqueeSec;
