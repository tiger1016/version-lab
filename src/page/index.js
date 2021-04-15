import React from "react";
import Filter from "./filter";
import Media from "./media";

const options = [
  {
    title: "Platform",
    value: ["All", "Facebook", "Instagram", "YouTube"],
  },
  {
    title: "Age",
    value: [
      "All",
      "18 to 24",
      "25 to 34",
      "35 to 44",
      "45 to 54",
      "55 to 64",
      "+65",
    ],
  },
  {
    title: "Gender",
    value: ["Both", "Male", "Female"],
  },
  {
    title: "Media Type",
    value: ["All", "Text", "Image", "Video", "Share"],
  },
  {
    title: "Date Range Filter",
    value: [
      "Today",
      "Yesterday",
      "This Week",
      "Last Week",
      "This Month",
      "Last Month",
      "Custom Dates",
    ],
  },
  {
    title: "Sort by",
    value: ["Spend", "Revenue", "ROAS", "VTR", "CPV/CPC"],
  },
];

const onSelect = (value) => {
  console.log(value);
};

const Page = () => {
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
      <div className="flex flex-wrap mt-4 sm:mt-12">
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
      </div>
    </div>
  );
};

export default Page;
