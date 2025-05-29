import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [token,setToken] =useState("");

  return (
    <div class="flex justify-center items-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          <Route path="/profile" element={<Profile token={token} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
