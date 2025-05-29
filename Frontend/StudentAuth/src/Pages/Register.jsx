import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { register } from "../service/student-service";
import { useNavigate } from "react-router-dom";

export default function Register({}) {
  // const [stdData, setStdData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const obj = { name, email, password };

  const navigate = useNavigate();

  const reg = () => {
    register(obj)
      .then((resp) => {
        console.log(resp);
        setMessage("Student Registered Successfully");
        setIsError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setMessage("Registration Failed : " + error.response.data.message);
        console.log(error.response.data.message);
      });

    setName("");
    setEmail("");
    setPassword("");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col w-[22rem] border-2 bg-slate-200 border-black p-6 gap-7 justify-center items-center">
        <div
          className={
            isError
              ? "text-red-600 font-bold text-xl font-serif text-center"
              : "text-green-500 font-bold text-xl font-serif text-center"
          }
        >
          {message}
        </div>
        <div>
          <Heading text="Registration Form" />
        </div>
        <div className="flex flex-col gap-2 border-solid">
          <Input type="text" value={name} label="Name" setValue={setName} />
          <Input type="email" value={email} label="Email" setValue={setEmail} />
          <Input
            type="password"
            value={password}
            label="Password"
            setValue={setPassword}
          />
        </div>
        <div>
          <Button text="Registere" onClick={reg} />
        </div>
        <div>
          <Button text="Already Registered" onClick={goToLogin} />
        </div>
      </div>
    </>
  );
}
