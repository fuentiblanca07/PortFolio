import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingLazy } from "./Components/Loading";
// Direct imports
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds on mount
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <LoadingLazy />;
  }

  return (
    <div>
      <header>My Portfolio</header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>© 2026 Julius</footer>
    </div>
  );
}