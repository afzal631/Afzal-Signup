import { Paper } from "@mui/material";
import Singup from "./components/auth/Singup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="bg-gra-800 h-[100vh]">
      <Paper
        elevation="16"
        className="flex items-center justify-center h-[100%]  bg-gradient-to-r from-pink-300 to-pink-50  flex-col flex-auto  p-8 overflow-hidden relative"
      >
        {/* <Test /> */}
        <UserAuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              <Route path="/signup" element={<Singup />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </UserAuthContextProvider>
      </Paper>
    </div>
  );
}

export default App;
