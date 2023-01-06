import React from "react";
import "./Node.css";

const Node = ({
  row,
  col,
  isStart,
  isFinish,
  isWall,
  isVisited,
  onMouseDown,
  onMouseUp,
  onMouseEnter,
}) => {
  const additionalClass = isStart
    ? "start"
    : isFinish
    ? "finish"
    : isWall
    ? "wall"
    : "";

  return (
    <td
      className={`node ${additionalClass}`}
      id={`node-${row}-${col}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
    >
      {row} {col}
    </td>
  );
};

export default Node;
