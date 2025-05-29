import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import User from "../components/User";
import Button from "../components/Button";
import { getStudents } from "../service/student-service";
import { useNavigate } from "react-router-dom";

export default function Profile({ token }) {
  const navigate = useNavigate();
  const [stdData, setStdData] = useState([]);
  const logStd = JSON.parse(localStorage.getItem("validStd"));

  const getStd = () => {
    getStudents(token)
      .then((resp) => {
        setStdData(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filteredData = stdData.filter((s) => s.email != logStd.email);

  useEffect(() => {
    if (logStd === null) {
      navigate("/login");
    }
    getStd();
  }, []);

  const goToLogin = () => {
    localStorage.removeItem("validStd");
    navigate("/login");
    alert("Logout Successfully ");
  };

  return (
    <>
      <div className="flex flex-col gap-10 ">
        <div className="border-2 bg-slate-300 border-black rounded-xl p-2 flex flex-col items-center gap-4">
          <User name={logStd?.name} email={logStd?.email} />
          <div>
            <Button text="Logout" onClick={goToLogin} />
          </div>
        </div>
        <div className="flex gap-8 w-[50rem] items-center flex-wrap justify-center">
          {filteredData.length > 0 ? (
            filteredData.map((s, index) => (
              <Card key={index} name={s.name} email={s.email} />
            ))
          ) : (
            <p className="text-red-500 text-3xl font-bold">No data found</p>
          )}
        </div>
      </div>
    </>
  );
}
