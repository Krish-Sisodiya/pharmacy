import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhoneAlt,
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import AnimatedBackground from "../components/AnimatedBackground";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setError(null);
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
      if (!formData.termsAccepted) {
        setError("Please accept the Terms & Conditions.");
        return;
      }
    }

    setLoading(true);

    // Simulate Auth / Local Storage Handshake
    setTimeout(() => {
      const userPayload = {
        name: isLogin ? (formData.name || formData.email.split("@")[0]) : formData.name,
        email: formData.email,
        phone: formData.phone || "",
      };

      localStorage.setItem("user", JSON.stringify(userPayload));
      localStorage.setItem("token", "dummy-jwt-token-12345");

      setLoading(false);
      navigate("/");
    }, 600);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-x-hidden">
      <AnimatedBackground />

      <div className="absolute top-10 left-10 w-72 h-72 bg-green-400/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/15 blur-[140px] rounded-full pointer-events-none" />

      {/* BACK TO HOME BUTTON */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-5 left-4 sm:left-8 z-30 flex items-center gap-2 text-green-800 font-semibold text-xs sm:text-sm bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition duration-300"
      >
        <FaArrowLeft className="text-green-600 text-xs" />
        <span>Back to Home</span>
      </motion.button>

      {/* MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md sm:max-w-lg bg-white/90 backdrop-blur-2xl border border-green-100/90 rounded-3xl p-6 sm:p-9 shadow-[0_20px_60px_rgba(22,163,74,0.12)] my-8"
      >
        {/* BRAND LOGO */}
        <div className="text-center mb-6">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/img/1 (1).png"
              alt="Aushadhiwalah Logo"
              className="w-28 sm:w-36 h-auto object-contain mx-auto drop-shadow-sm transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-800">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            {isLogin
              ? "Access your trusted herbal & healthcare solutions"
              : "Join Aushadhiwalah for pure botanical extracts & care"}
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="relative flex p-1.5 bg-green-50/90 rounded-2xl border border-green-100 mb-6">
          <button
            type="button"
            onClick={() => {
              setIsLogin(true);
              setError(null);
            }}
            className={`relative flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-colors duration-300 z-10 ${
              isLogin ? "text-green-800" : "text-gray-500 hover:text-green-700"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setIsLogin(false);
              setError(null);
            }}
            className={`relative flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-colors duration-300 z-10 ${
              !isLogin ? "text-green-800" : "text-gray-500 hover:text-green-700"
            }`}
          >
            Sign Up
          </button>

          <motion.div
            className="absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md border border-green-100"
            layoutId="authTabIndicator"
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              left: isLogin ? "6px" : "50%",
              width: "calc(50% - 6px)",
            }}
          />
        </div>

        {/* ERROR MESSAGE ALERT */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold"
            >
              <FaExclamationCircle className="text-sm shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div
                key="register-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 overflow-hidden"
              >
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600 text-xs" />
                    <input
                      type="text"
                      name="name"
                      required={!isLogin}
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-green-100 rounded-xl py-3 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/20 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhoneAlt className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600 text-xs" />
                    <input
                      type="tel"
                      name="phone"
                      required={!isLogin}
                      placeholder="+91 96911 90195"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-green-100 rounded-xl py-3 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/20 transition-all shadow-sm"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600 text-xs" />
              <input
                type="email"
                name="email"
                required
                placeholder="aushadhiwalah@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-green-100 rounded-xl py-3 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/20 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Password
              </label>
              {isLogin && (
                <a
                  href="#forgot"
                  className="text-xs font-semibold text-green-600 hover:text-green-700 transition"
                >
                  Forgot Password?
                </a>
              )}
            </div>
            <div className="relative">
              <FaLock className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600 text-xs" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white border border-green-100 rounded-xl py-3 pl-11 pr-11 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/20 transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-green-600 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                  Confirm Password
                </label>
                <div className="relative">
                  <FaLock className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600 text-xs" />
                  <input
                    type="password"
                    name="confirmPassword"
                    required={!isLogin}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-white border border-green-100 rounded-xl py-3 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/20 transition-all shadow-sm"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Terms Checkbox */}
          {!isLogin && (
            <label className="flex items-start gap-2.5 pt-1 text-xs text-gray-500 cursor-pointer select-none">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
                className="mt-0.5 rounded border-green-200 text-green-600 focus:ring-green-400"
              />
              <span>
                I accept the{" "}
                <span className="text-green-600 font-semibold underline">
                  Terms & Conditions
                </span>{" "}
                and Privacy Policy.
              </span>
            </label>
          )}

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-green-600 via-emerald-600 to-green-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-75 cursor-pointer"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <FaCheckCircle className="text-sm" />
                <span>{isLogin ? "Sign In to Aushadhiwalah" : "Create My Account"}</span>
              </>
            )}
          </motion.button>
        </form>

        {/* BOTTOM TOGGLE */}
        <div className="mt-6 text-center text-xs sm:text-sm text-gray-500">
          {isLogin ? "Don't have an account yet?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
            }}
            className="font-bold text-green-600 hover:text-green-700 underline transition cursor-pointer"
          >
            {isLogin ? "Register now" : "Log in"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;