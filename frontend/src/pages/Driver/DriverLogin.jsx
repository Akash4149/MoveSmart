import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function DriverLogin() {
    const Navigate = useNavigate()
  const [busno, setBusno] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!busno || !Password) {
      alert("Please fill out both fields.");
      return;
    }
    const response = await fetch (`http://localhost:3000/driver/login/${busno}/${Password}`,{
      method:"POST",
      credentials:"include"
    })
    if(response.ok){
        const data = await response.json()
        Navigate('/driver')
        toast.success(' Driver Login ',{
          position : 'top-center',
          autoClose:2000
        })
    }
    // Add further login logic here
  };
  return (
    <div className="flex bg-slate-100">
      <div className="min-h-screen w-[60%] ">
        <img
          className="cover h-[98%] mt-2 w-[98%] ml-2 rounded-lg"
          src="https://imgs.search.brave.com/-xegy4nQi5b7bNvmct4g_fkDI52SRVnu7rPQtf6Sw7M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/NjQ4MDgxMC9waG90/by9jYXJzLXRyYXZl/bGluZy10cm91Z2gt/Y2l0eS1pbi10aGUt/ZXZlbmluZy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WHpa/QTFOX1NZaEZITWsy/a3pUVEhIRUhucnJ0/b2x1bXpNRDA1YzYx/bVNFST0"
          alt=""
        />
      </div>
      <div className="my-auto  h-96 w-[40%] mx-auto">
        <h1 className="text-center font-bold text-3xl font-sans">
          Welcome To Move Online
        </h1>
        <p className="text-center my-4">Login Before start driving</p>
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
            value={Password}
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
        <div className="flex items-center justify-start">
        <p className="text-center my-4">Not Registered?</p>
        <Link className="text-sm text-blue-500 underline" to={'/driverRegister'}>Register here</Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default DriverLogin;
