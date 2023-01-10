import React from "react";
import "./Help.css";
import wall from "./img/wall.gif";
import select from "./img/select.gif";
import move from "./img/move.gif";

const Help = ({ open, setOpenHelp }) => {
  if (!open) return null;
  return (
    <div className="overlay" onClick={() => setOpenHelp(!open)}>
      <div className="modal-help" onClick={(e) => e.stopPropagation()}>
        <div className="text-wall">
          <p>
            Click to add walls. Walls are impassable nodes, which will be
            ignored by the algorithms.
            <br></br>
            To remove them click
            <span className="clear-walls"> CLEAR WALLS</span>.
          </p>
        </div>

        <div className="text-move">
          <p>
            Drag-and-drop to move the start and destination nodes. You can put
            them anywhere.
          </p>
        </div>

        <div className="text-run">
          <p>
            Choose among the available algorithms and click{" "}
            <span className="run">RUN </span>
            to see them running. To run it again, click
            <span className="reset-grid"> RESET GRID</span>.
          </p>
        </div>

        <img className="gif" src={wall}></img>
        <img className="gif" src={move}></img>
        <img className="gif" src={select}></img>

        <button className="ok-btn" onClick={() => setOpenHelp(!open)}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Help;
