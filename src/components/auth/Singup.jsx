import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Test from "../../Test";
import { Link } from "react-router-dom";

export default function Singup() {
  const [view, setView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 978);
    };
    window.addEventListener("resize", handleResize);

    setIsSmallScreen(window.innerWidth <= 978);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="grid grid-flow-col grid-cols-1 lg:grid-cols-2  h-[100vh] w-full">
        {!isSmallScreen && <div className="flex items-center justify-center ">
          <Test />
        </div>}
        <div className="flex items-center justify-center ">
          <div className="z-1000  rounded-lg pb-11 bg-slate-100">
            <div className="flex flex-col gap-2 items-center justify-center p-6  z-1">
              <p className="text-2xl font-bold mb-5 text-black">
                CREATE AN ACCOUNT
              </p>
              <TextField
                id="outlined-basic"
                label="Fullname"
                placeholder="Enter your fullname"
                variant="outlined"
                sx={{ width: "18rem" }}
              />
              <TextField
                id="outlined-basic"
                label="password"
                placeholder="Enter your password"
                variant="outlined"
                sx={{ width: "18rem" }}
              />
              <TextField
                id="outlined-basic"
                label="confirm *"
                placeholder="Confirm password"
                variant="outlined"
                sx={{ width: "18rem" }}
              />
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "pink",
                  color: "white",
                  width: "100%",
                  border: "3px solid black",
                  "&:hover": {
                    backgroundColor: "wihte",
                    color: "black",
                    border: "3px solid black",
                  },
                  marginTop: "10px",
                }}
              >
                SignUp
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "pink",
                  color: "white",
                  width: "100%",
                  border: "3px solid black",
                  "&:hover": {
                    backgroundColor: "wihte",
                    color: "black",
                    border: "3px solid black",
                  },
                  marginTop: "10px",
                }}
              >
                Signup with Google
              </Button>
              <div>
                <span className="text-md">already have account?</span>
                <Link to="/login" className=" text-blue-400 pl-1 text-sm">
                  login
                </Link>
              </div>
              <p className="text-gray-800 mt-4">
                <span className="font-bold flex items-center justify-center">
                  Acceptance of Terms:
                  {!view && (
                    <p
                      onClick={() => {
                        setView(true);
                      }}
                      className="text-sm font-semibold text-blue-400 ml-1 z-1000 cursor-pointer"
                    >
                      learn more
                    </p>
                  )}
                </span>{" "}
                {view && (
                  <p>
                    By accessing or using the application,
                    <br /> you agree to abide by these
                    <br /> terms and conditions.
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  rounded w-full flex justify-center items-center ">
        {" "}
        made with love by Mohammed Afzal❤️
      </div>
    </>
  );
}
