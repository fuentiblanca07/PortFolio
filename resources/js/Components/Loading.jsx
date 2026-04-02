import React from "react";
import "./Loading.css";

export const LoadingLazy = () => {
  console.log("Loading component is rendering"); // Debug log
  return (
    <div className="loading-wrapper">
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Loading Your Portfolio</h2>
      <div className="spinner-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <p>Updating...</p>
    </div>
  );
};