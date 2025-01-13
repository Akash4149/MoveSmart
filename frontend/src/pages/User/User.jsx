import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Feedback, Footer, Navbar, SOS } from "../../components";
import { Userprovider } from "../../../context/userContext.jsx";
import { useNavigate } from "react-router-dom";
function User() {
  const Navigate = useNavigate()
  const [feedback, setFeedback] = useState(false);
  const [sos, setsos] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  const handlefeedback = (e) => {
    if (e.target === e.currentTarget) {
      setFeedback(false);
    }
  };
  const handleSOS = (e) => {
    if (e.target === e.currentTarget) {
      setsos(false);
    }
  };
  
  return (
    
      <div className="min-h-screen">
        {sos && (
          <div
            onClick={handleSOS}
            className=" inset-0 fixed backdrop-blur-sm z-20 flex items-center justify-center"
          >
            <SOS setsos={setsos} />
          </div>
        )}
        {feedback && (
          <div
            onClick={handlefeedback}
            className=" inset-0 fixed backdrop-blur-sm z-20 flex items-center justify-center"
          >
            <Feedback setfeedback={setFeedback} />
          </div>
        )}
        <Navbar
          feedback={feedback}
          setFeedback={setFeedback}
          sos={sos}
          setsos={setsos}
        />
        <div className="w-[80%] max-w-7xl flex items-center h-96  mx-auto my-16  justify-evenly">
          <div className="">
            <h1 className="font-bold flex flex-col gap-3">
              <span className="text-6xl ">Track Buses</span>
              <span className="text-6xl flex-start">Near You...</span>
            </h1>
            <p className="text-center mt-4 text-xl">
              See all the buses near your location..
            </p>
            <div className="mt-5 flex gap-6">
            <Button
              onClick={() => Navigate('/bustracking')}
              sx={{
               borderRadius: "10px",
               height: "50px",
               transition: "transform 0.3s ease-in-out", // Smooth transition for zoom
               "&:hover": {
                 transform: "scale(1.1)", // Slight zoom-in effect on hover
               },
             }}
             variant="contained"
           >
             Start Tracking
           </Button>

             
            </div>
          </div>
          <img
            width={500}
            height={500}
            src="https://preview.colorlib.com/theme/launch/images/market-launch-pana.svg"
            alt=""
          />
        </div>
        

<div className="w-[80%] max-w-7xl flex items-center h-96 mx-auto mb-20 justify-evenly">
  <img
    className="rounded-lg"
    width={350}
    height={350}
    src="/bus.jpg"
    alt=""
  />
  <div>
    <h1 className="font-bold flex flex-col gap-3">
      <span className="text-6xl">Book Buses...</span>
    </h1>
    <p className="mt-4 text-xl">Book buses before everyone..</p>
    <div className="mt-5 flex gap-6">
      <Button
        onClick={() => Navigate('/bookticket')}
        sx={{
          borderRadius: "10px",
          height: "50px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        variant="contained"
      >
        Book Your Bus
      </Button>
    </div>
  </div>
</div>

        <Footer />
      </div>
      
  );
}

export default User;
