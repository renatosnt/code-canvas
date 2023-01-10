import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="item">
        <div className="div-sub" id="wall"></div>
        <span>Walls</span>
      </div>
      <div className="item">
        <div className="div-sub" id="visited-nodes"></div>
        <span>Visited nodes</span>
      </div>
      <div className="item">
        <div className="div-sub" id="resulting-path"></div>
        <span>Resulting path</span>
      </div>
      <div className="item">
        <div className="div-sub" id="origin"></div>
        <span>Origin</span>
      </div>
      <div className="item">
        <div className="div-sub" id="destination"></div>
        <span>Destination</span>
      </div>
    </div>
  );
};

export default Footer;
