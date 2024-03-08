import React from "react";
import p1 from "../../../public/Partners/partner1.png";
import p2 from "../../../public/Partners/partner2.png";
import p3 from "../../../public/Partners/partner3.png";
import p4 from "../../../public/Partners/partner4.png";
import p5 from "../../../public/Partners/partner5.png";
import p6 from "../../../public/Partners/partner6.png";
import Image from "next/image";
const Partner: React.FC = () => {
  const partnerImg: string[] = [p1, p2, p3, p4, p5, p6];
  return (
    <div className="container my-10">
      <h4 className="text-base font-bold md:text-2xl md:ml-4">
        Trending Brands
      </h4>
      <div className=" grid grid-cols-6 gap-4 my-5">
        {partnerImg.map((partner: string, index: number) => (
          <div className="" key={index}>
            <Image src={partner} alt="partners" width={200}></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
