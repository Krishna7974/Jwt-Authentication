import React from "react";

export default function ({ type, value, label, setValue }) {
  return (
    <>
      <div className="flex flex-col gap-1 font-medium w-[17rem]">
        <label htmlFor="">{label}</label>
        <input
          className="p-1 outline-none border-2 border-black rounded-sm"
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </div>
    </>
  );
}
