import React from "react";
import "./Help.css";
const Help = ({ open, setOpenHelp }) => {
  if (!open) return null;
  return (
    <div className="overlay" onClick={() => setOpenHelp(!open)}>
      <div className="modal-help" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>Walls</h2>
        </div>
        <div>
          <h2>Run</h2>
        </div>

        <div>
          <h2>Reset</h2>
        </div>
        <div>
          <h2>if you need help again</h2>
        </div>
        <button className="ok-btn" onClick={() => setOpenHelp(!open)}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Help;
