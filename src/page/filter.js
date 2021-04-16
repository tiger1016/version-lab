import React, { useState } from "react";

const Filter = ({ options, onSelect, className }) => {
  const [drop, setDrop] = useState(false);
  const [select, setSelect] = useState(options.title);

  const onClick = (index) => {
    setSelect(options.values[index]);
    setDrop(false);
    onSelect(options.values[index]);
  };

  return (
    <div className={"flex flex-col m-1 relative cursor-default " + className}>
      <div
        className={
          "flex justify-between rounded border-gray-500 border-2 px-2 " +
          (options.disabled && " bg-gray-400")
        }
        onClick={() => !options.disabled && setDrop((drop) => !drop)}
      >
        <p className="p-1 font-normal mr-2">{options.value || options.title}</p>
        <div className="flex flex-col justify-center">
          {drop ? (
            <i className="fa fa-sort-up -mb-2"></i>
          ) : (
            <i className="fa fa-sort-down mb-1"></i>
          )}
        </div>
      </div>
      {drop && (
        <div className="flex flex-col rounded border-gray-500 border-2 absolute mt-10 w-full min-h-full transition-height duration-1000 ease-in-out z-50 bg-white shadow-2xl">
          {options.values.map((option, index) => (
            <div
              className={
                (index === options.values.length - 1 ? "" : `border-b-2 `) +
                `border-gray-300 px-2 py-1 hover:bg-gray-300 cursor-pointer ` +
                (select === options.values[index] ? "bg-gray-100" : "")
              }
              key={index}
              onClick={() => onClick(index)}
            >
              <p className="p-1 font-normal">{option}</p>
            </div>
          ))}
        </div>
      )}
      {drop && (
        <div
          onClick={() => setDrop(false)}
          className="fixed inset-0 z-10 bg-gray-300 bg-opacity-20 sm:bg-none sm:bg-opacity-0"
        />
      )}
    </div>
  );
};

export default Filter;
