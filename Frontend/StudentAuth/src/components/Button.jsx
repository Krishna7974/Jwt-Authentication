import React from "react";

export default function ({ text, onClick }) {
  return (
    <>
      <div className="border-2 w-fit text-center border-black bg-gray-400 px-6 py-2 rounded-lg font-bold">
        <button onClick={onClick}>{text}</button>
      </div>
    </>
  );
}
