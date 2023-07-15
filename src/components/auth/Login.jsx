import React, { useEffect, useState } from "react";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Test from "../../Test";
import { Link } from "react-router-dom";

import { useUserAuth } from "../../context/UserAuthContext";

export default function Login() {
  const [view, setView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, googleSignIn } = useUserAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 978);
    };
    window.addEventListener("resize", handleResize);

    setIsSmallScreen(window.innerWidth <= 978);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (name !== "" || password !== "") {
      try {
        await login(name, password)(navigate("/home"));
      } catch (err) {
        setError(err.message);
      }
      setName("");
      setPassword("");
    } else {
      alert("please enter fields");
    }
  };
  const googleLoginIn = async (e) =>{
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/home")
    }catch(err){
      console.log(err.message);
    }
  }
  return (
    <>
      <div className="grid grid-flow-col grid-cols-1 lg:grid-cols-2  h-[100vh] w-full">
        {!isSmallScreen && (
          <div className="flex items-end justify-center ">
            <Test />
          </div>
        )}
        <div className="flex items-center justify-center ">
          <div className="z-1000  rounded-lg pb-11 bg-slate-100">
            <div className="flex flex-col gap-2 items-center justify-center p-6  z-1">
              <p className="text-2xl font-bold mb-5 text-black">LOGIN</p>
              {error && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                </Alert>
              )}
              <TextField
                label="Fullname"
                placeholder="Enter your fullname"
                variant="outlined"
                value={name}
                sx={{ width: "18rem" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                label="password"
                placeholder="Enter your password"
                variant="outlined"
                type={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Login
              </Button>
              <hr className="w-[90%] bg-gray-600 p-[0.5px] " />
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
                }}
                onClick = {(e)=>{
                  googleLoginIn(e);
                }}
              >
                Signup with Google
              </Button>

              <div>
                <span className="text-md">don't have an account yet?</span>
                <Link to="/signup" className=" text-blue-400 pl-1 text-sm">
                  SignUp
                </Link>
              </div>
              <div className="text-gray-800 mt-4">
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
              </div>
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
