import React from "react";

export default function ({ name, email }) {
  return (
    <>
      <div className="border-2 bg-neutral-300 border-black rounded-lg p-3 gap-2 font-medium text-2xl text-center">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
}
