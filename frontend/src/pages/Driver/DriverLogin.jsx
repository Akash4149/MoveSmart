import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
function DriverLogin() {
  const [busno, setBusno] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!busno || !password) {
      alert("Please fill out both fields.");
      return;
    }
    console.log("Bus Number:", busno);
    console.log("Password:", password);
    // Add further login logic here
  };
  return (
    <div className="flex bg-slate-100">
      <div className="min-h-screen w-[60%] ">
        <img
          className="cover h-[98%] mt-2 w-[98%] ml-2 rounded-lg"
          src="https://images.pexels.com/photos/1426516/pexels-photo-1426516.jpeg"
          alt=""
        />
      </div>
      <div className="my-auto  h-96 w-[40%] mx-auto">
        <h1 className="text-center font-bold text-3xl font-sans">
          Welcome To Move smart
        </h1>
        <p className="text-center my-4">Enter details Before start driving</p>
        <form onSubmit={handleSubmit} className="flex w-[60%] mx-auto flex-col gap-4 my-10" action="">
          <TextField
            value={busno}
            onChange={(e) => setBusno(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Bus Number"
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="outlined-basic"
            label="Driver ID"
            variant="outlined"
          />
          <Button
            type="submit"
            sx={{ paddingTop: "10px", marginTop: "20px" }}
            variant="contained"
          >
            Enter
          </Button>
        </form>
      </div>
    </div>
  );
}

export default DriverLogin;
