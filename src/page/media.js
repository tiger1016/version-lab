import React, { useState } from "react";
import "./media.css";

const Media = () => {
  const [values, setValuse] = useState([
    {
      title: "impressions",
      value: "1,000",
    },
    {
      title: "conversions",
      value: "1,000",
    },
    {
      title: "views",
      value: "1,000",
    },
    {
      title: "reach",
      value: "1,000",
    },
  ]);

  return (
    <div className="card-zoom relative flex items-center justify-center overflow-hidden w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 h-auto sm:h-48 md:h-64 lg:h-64 p-4">
      <div className="w-full h-full rounded-md overflow-hidden shadow-lg">
        <img
          src="https://mdbootstrap.com/img/new/fluid/city/113.jpg"
          className="card-zoom-image w-full h-auto md:h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"
        />
      </div>
      <div className="card-zoom-text grid grid-flow-row grid-cols-2 gap-1 sm:gap-0 md:gap-2 lg:gap-4 2xl:gap-8 absolute text-5xl font-black transition-all duration-500 ease-in-out transform translate-y-96">
        {values.map((item, index) => (
          <div key={index}>
            <p className="font-bold text-blue-400 uppercase text-sm sm:text-base md:text-lg lg:text-lg">
              {item.title}
            </p>
            <p className="font-bold text-blue-500 text-sm sm:text-base md:text-lg lg:text-lg">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
