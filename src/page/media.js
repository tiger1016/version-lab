import React, { useEffect, useState } from "react";
import "./media.css";

const hoverInit = [
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
];

const textInit = [
  {
    title: "spend",
    value: "$XX.XX",
  },
  {
    title: "revenue",
    value: "$XX.XX",
  },
  {
    title: "roas",
    value: "X.Y",
  },
  {
    title: "vtr",
    value: "XX%",
  },
  {
    title: "cpv",
    value: "$X.XX",
  },
  {
    title: "cpm",
    value: "$XX.X",
  },
];

const Media = ({ data }) => {
  const [hover, setHover] = useState(hoverInit);
  const [text, setText] = useState(textInit);

  useEffect(() => {
    setText(
      textInit.map((text) => {
        if (data[text.title]) {
          text.value = data[text.title];
          switch (text.title) {
            case "spend":
            case "revenue":
            case "cpv":
            case "cpm":
              text.value = "$" + text.value;
              break;
            case "vtr":
              text.value += "%";
              break;
          }
        }
        return text;
      })
    );
    setHover(
      hoverInit.map((hover) => {
        hover.value = data[hover.title];
        return hover;
      })
    );
  }, [data]);

  return (
    <div className="flex flex-col mb-12 justify-center">
      <div className="card-zoom relative flex items-center justify-center overflow-hidden cursor-default flex-1">
        <div className="w-full h-full rounded-md overflow-hidden shadow-lg">
          {data.media_type === "image" ? (
            <img
              src={data.media_url}
              className="card-zoom-image w-full h-auto md:h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"
            />
          ) : data.platform === "youtube" ? (
            <div className="card-zoom-iframe w-full h-full">
              <iframe width="100%" height="100%" src={data.media_url}></iframe>
            </div>
          ) : (
            <video width="100%" height="100%" controls>
              <source src={data.media_url} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="card-zoom-text grid grid-flow-row grid-cols-2 gap-1 sm:gap-0 md:gap-2 lg:gap-4 2xl:gap-8 absolute text-5xl font-black transition-all duration-500 ease-in-out transform translate-y-96">
          {hover.map((item, index) => (
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
      <div className="grid grid-flow-row grid-cols-3 p-1 pt-4 sm:pt-8 gap-2">
        {text.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="text-sm uppercase sm:text-base text-gray-500">
              {item.title}
            </p>
            <p className="text-base sm:text-lg">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
