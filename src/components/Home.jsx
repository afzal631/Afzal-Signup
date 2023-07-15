import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
  const {user, logOut } = useUserAuth();
  const handleSignOut= async ()=> {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className="bg-white p-12 flex flex-col items-center justify-center">
      <div>Email ID: {user.email}</div>
      <button
        className="bg-blue-400 p-2 mt-2 border-2 border-black hover:bg-red-400"
        onClick={() => {
          handleSignOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
