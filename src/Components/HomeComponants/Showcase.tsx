import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../public/showcase_cetalog/resfrigarator.png";
import img2 from "../../../public/showcase_cetalog/tab.png";
import img3 from "../../../public/showcase_cetalog/chair.png";
import img4 from "../../../public/showcase_cetalog/drill.png";

const Showcase: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:flex justify-center md:gap-8">
      <div className="flex gap-4 items-center bg-slate-100 rounded-lg p-4">
        <Image alt="showcaseImage" src={img1} width={130} height={14}></Image>
        <div>
          <h3 className="font-bold">Refrigerator</h3>
          <div className="flex gap-2">
            <h3>Shop </h3>
            <button className="p-1 bg-amber-400 rounded-full hover:translate-x-2 transition-all">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-slate-100 rounded-lg p-4">
        <Image alt="showcaseImage" src={img2} width={110} height={14}></Image>
        <div>
          <h3>
            SamSung Galaxy <br />
            <span className="font-bold">S6 Tab</span>
          </h3>
          <div className="flex gap-1">
            <h3>Shop </h3>
            <button className="p-1 bg-amber-400 rounded-full hover:translate-x-2 transition-all">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-slate-100 rounded-lg p-4">
        <Image alt="showcaseImage" src={img3} width={110} height={14}></Image>
        <div>
          <h3>
            Classic <span className="font-bold">Armchair</span>
            <br /> Porto Style
          </h3>
          <div className="flex gap-1">
            <h3>Shop </h3>
            <button className="p-1 bg-amber-400 rounded-full hover:translate-x-2 transition-all">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-slate-100 rounded-lg p-4">
        <Image alt="showcaseImage" src={img4} width={110} height={14}></Image>
        <div>
          <h3>
            Battery <span className="font-bold">Drill X2</span> <br /> Pro
            Version
          </h3>
          <div className="flex gap-1">
            <h3>Shop </h3>
            <button className="p-1 bg-amber-400 rounded-full hover:translate-x-2 transition-all">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
