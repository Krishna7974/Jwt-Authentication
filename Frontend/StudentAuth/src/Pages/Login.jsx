import React from "react";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { login } from "../service/student-service";
import { useNavigate } from "react-router-dom";

export default function Login({setToken}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const obj = { email, password };

  const navigate = useNavigate();

  const log = () => {
    login(obj)
      .then((resp) => {
        console.log("error of login page", resp);
        setToken(resp.jwtToken);
        localStorage.setItem("validStd", JSON.stringify(resp));
        navigate("/profile");
        console.log("login success");
      })
      .catch((error) => {
        console.log("My Error", error);
        setIsError(true);
        setMessage("Login Failed : " + error.response.data.message);
        console.log("Error with data", error.response.data);
      });
    setEmail("");
    setPassword("");
  };

  const goToRegister = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col w-[22rem] border-2 border-black p-6 gap-7 justify-center items-center bg-slate-200">
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
          <Heading text="Login Form" />
        </div>
        <div className="flex flex-col gap-2 border-solid">
          <Input type="email" value={email} label="Email" setValue={setEmail} />
          <Input
            type="password"
            value={password}
            label="Password"
            setValue={setPassword}
          />
        </div>
        <div>
          <Button text="Login" onClick={log} navigate={"/login"} />
        </div>
        <div>
          <Button text="Create Account" onClick={goToRegister} />
        </div>
      </div>
    </>
  );
}
