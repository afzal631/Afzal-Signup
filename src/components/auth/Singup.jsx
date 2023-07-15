import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Test from "../../Test";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

export default function Singup() {
  const [view, setView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 978);
    };
    window.addEventListener("resize", handleResize);

    setIsSmallScreen(window.innerWidth <= 978);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmP, setConfirmP] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    // if (name !== "" || password !== "" || confirmP !== "") {
      if (password === confirmP) {
        try {
          await signUp(name, password);
        } catch (err) {
          setError(err.message);
        }
        setName("");
        setPassword("");
        setConfirmP("");
      } else {
        alert("password doesn't match");
      }
    // } else {
    //   alert("please enter fields");
    // }
  };
  return (
    <>
      <div className="grid grid-flow-col grid-cols-1 lg:grid-cols-2  h-[100vh] w-full">
        {!isSmallScreen && (
          <div className="flex items-center justify-center ">
            <Test />
          </div>
        )}
        <div className="flex items-center justify-center ">
          <div className="z-1000  rounded-lg pb-11 bg-slate-100">
            <form className="flex flex-col gap-2 items-center justify-center p-6  z-1">
              <p className="text-2xl font-bold mb-5 text-black">REGISTER</p>
              {error && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                </Alert>
              )}
              <p>Create an account</p>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="outlined"
                value={name}
                sx={{ width: "18rem" }}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                type="password"
                label="password"
                placeholder="Enter your password"
                variant="outlined"
                value={password}
                sx={{ width: "18rem" }}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <TextField
                type="password"
                label="confirm"
                value={confirmP}
                placeholder="Confirm password"
                variant="outlined"
                sx={{ width: "18rem" }}
                required
                onChange={(e) => {
                  setConfirmP(e.target.value);
                }}
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
                  handleSignup(e);
                }}
              >
                SignUp
              </Button>

              <div>
                <span className="text-md">already have an account?</span>
                <Link to="/" className=" text-blue-400 pl-1 text-sm">
                  login
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
            </form>
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
