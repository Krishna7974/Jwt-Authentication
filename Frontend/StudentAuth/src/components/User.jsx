import React from "react";

export default function User({ name, email }) {
  return (
    <>
      <div className="flex flex-col gap-4 font-medium text-2xl text-center">
        <h2>Name : {name}</h2>
        <h4>Email : {email}</h4>
      </div>
    </>
  );
}
