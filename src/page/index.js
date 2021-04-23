import React, { useEffect, useState } from "react";
import Filter from "./filter";
import Media from "./media";
import DateRange from "./dateRange";

const optInit = [
  {
    title: "Platform",
    value: "",
    values: ["All", "Facebook", "Instagram", "YouTube"],
    disabled: false,
  },
  {
    title: "Age",
    value: "",
    values: [
      "All",
      "18 to 24",
      "25 to 34",
      "35 to 44",
      "45 to 54",
      "55 to 64",
      "+65",
    ],
    disabled: false,
  },
  {
    title: "Gender",
    value: "",
    values: ["Both", "Male", "Female"],
    disabled: false,
  },
  {
    title: "Media Type",
    value: "",
    values: ["All", "Text", "Image", "Video", "Share"],
    disabled: false,
  },
  {
    title: "Sort by",
    value: "",
    values: ["Spend", "Revenue", "ROAS", "VTR", "CPV/CPC"],
    disabled: false,
  },
];

const dataInit = [
  {
    media_url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    media_type: "video",
    spend: 123.1,
    revenue: 200,
    impressions: 2020,
    platform: "youtube",
    age_min: null,
    age_max: null,
    gender: null,
    cpm: 13.2,
    roas: 828,
    vtr: 88,
    cpv: 2,
  },
  {
    media_url:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F03%2Fjoey.jpg",
    media_type: "image",
    spend: 123.1,
    revenue: 200,
    impressions: 2020,
    platform: "facebook",
    age_min: null,
    age_max: null,
    gender: null,
    cpm: 13.2,
    roas: 828,
    vtr: 88,
    cpv: 2,
  },
  {
    media_url:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F03%2Fjoey.jpg",
    media_type: "image",
    spend: 123.1,
    revenue: 200,
    impressions: 2020,
    platform: "facebook",
    age_min: null,
    age_max: null,
    gender: null,
    cpm: 13.2,
    roas: 828,
    vtr: 88,
    cpv: 2,
  },
];

const Page = () => {
  const [options, setOptions] = useState(optInit);
  const [data, setData] = useState([]);

  const onSelect = (value) => {
    if (value === "YouTube") {
      setOptions((options) => {
        return options.map((option) => {
          if (option.title === "Platform") {
            option.value = value;
          } else if (option.title === "Gender") {
            option.disabled = true;
            option.value = "Any";
          } else if (option.title === "Media Type") {
            option.disabled = true;
            option.value = "Video";
          }
          return option;
        });
      });
    } else {
      setOptions((options) => {
        return options.map((option) => {
          option.values.map((item) => {
            if (item === value) option.value = value;
          });

          if (options[0].values.findIndex((item) => item === value) > -1) {
            if (option.title === "Gender") {
              option.disabled = false;
              option.value = "";
            } else if (option.title === "Media Type") {
              option.disabled = false;
              option.value = "";
            }
          }
          return option;
        });
      });
    }
  };

  useEffect(() => {
    setData(dataInit);
  }, []);

  useEffect(() => {}, [options]);

  return (
    <div className="m-6 sm:m-12 flex flex-col">
      <div className="flex lg:flex-row md: flex-col">
        <div className="lg:w-8/12">
          <p className="font-mono text-3xl ml-1 font-bold my-4">
            Create Analytics
          </p>
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {options.slice(0, 4).map((option, index) => (
              <Filter
                options={option}
                key={index}
                onSelect={onSelect}
                className="flex-1"
              />
            ))}
          </div>
        </div>
        <div className="lg:w-4/12 ml-0 lg:ml-12 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <DateRange />
          {options.slice(4).map((option, index) => (
            <Filter
              options={option}
              onSelect={onSelect}
              key={index}
              className="flex-1"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-4 sm:mt-12 gap-4 sm:gap-4 lg:gap-8">
        {data.map((datum, index) => (
          <Media key={index} data={datum} />
        ))}
      </div>
    </div>
  );
};

export default Page;
