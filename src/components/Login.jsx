import React, { useState } from "react";
import Header from "./Header";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleSignin = () => {
    setIsSignin(!isSignin);
  };
  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
          alt="Background-Img"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <Header />

        {/* Centered Login Form */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <form className="bg-black bg-opacity-75 p-10 rounded-md max-w-md w-full space-y-6 text-white">
            <h2 className="text-3xl font-semibold text-center">
              {isSignin ? "Signin" : "Signup"}
            </h2>

            {!isSignin && (
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            )}

            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {/* <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            /> */}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 pr-10 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded cursor-pointer"
            >
              {isSignin ? "Signin" : "Signup"}
            </button>

            <div className="flex justify-between text-sm text-gray-400">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>

            <p className="text-gray-400 text-sm text-center">
              {isSignin ? "New to Netflix?" : "Already have an account?"}{" "}
              <a
                onClick={toggleSignin}
                className="text-white hover:underline cursor-pointer"
              >
                {isSignin ? "Create an account" : "Sign In"}
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
