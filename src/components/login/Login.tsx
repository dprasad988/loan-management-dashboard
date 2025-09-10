import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import loan from "../../assets/images/loan.jpg";
import { colors } from "@/styles/colors";
import { Lock, Mail } from "lucide-react";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    const brokerEmail = import.meta.env.VITE_BROKER_EMAIL;
    const brokerPassword = import.meta.env.VITE_BROKER_PASSWORD;
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;


    if (email === brokerEmail && password === brokerPassword) {
      setError("");
      login();
      navigate("/dashboard");
    } else if (email === adminEmail && password === adminPassword) {
      setError("");
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: colors.light }}
    >
      <Card className="w-full md:w-2/3 lg:w-1/2 lg:h-90 flex flex-row bg-transparent p-0 mx-4 h-100">
        <div className="w-1/2 hidden md:block">
          <img
            src={loan}
            alt="Login"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-center lg:mb-4 mb-5">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center border rounded-md mt-5">
              <Mail
                size={20}
                className="ml-3"
                style={{ color: colors.darkgray }}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 pl-10 border-none focus:ring-2 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div
              className="mb-4 flex items-center border rounded-md mt-5"
              style={{ color: colors.darkgray }}
            >
              <Lock
                size={20}
                className="ml-3"
                style={{ color: colors.darkgray }}
              />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 pl-10 border-none focus:ring-2 rounded-md"
                style={{ color: colors.blue }}
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <div className="text-sm mb-4" style={{ color: colors.red }}>{error}</div>}

            <Button
              type="submit"
              className="w-full p-2 rounded-md mt-5"
              style={{ backgroundColor: colors.dark }}
            >
              Login
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
