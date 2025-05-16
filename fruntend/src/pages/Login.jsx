// src/pages/Login.jsx
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(!!value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      setError("Please complete the reCAPTCHA verification");
      return;
    }

    if (email === "admin123@gmail.com" && password === "1234") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try again.");
      recaptchaRef.current?.reset();
      setIsCaptchaVerified(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-5xl p-6 md:p-12">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="mt-1 flex items-center border rounded-md px-3 py-2">
                <span className="material-icons-outlined text-gray-400 mr-2">mail</span>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full outline-none"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <div className="mt-1 flex items-center border rounded-md px-3 py-2">
                <span className="material-icons-outlined text-gray-400 mr-2">lock</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full outline-none"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LenPj0rAAAAADVaRUNLFp5Z2Q3b7wVjVhK3utIY"
                onChange={handleCaptchaChange}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold"
            >
              Login
            </button>
          </form>

          <div className="text-sm text-gray-600 space-y-1">
            <p>Don't have an account?</p>
            <div className="flex flex-col gap-1">
              <Link to="/register" className="text-blue-700 hover:underline font-medium">
                Sign up as a Patient
              </Link>
              <Link to="/registerdoctor" className="text-blue-700 hover:underline font-medium">
                Sign up as a Doctor
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Doctor Image */}
        <div className="hidden md:block w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="/assets/doctor.png"
            alt="Doctor Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
