import React from "react";
import "./Node.css";

const Node = ({
  row,
  col,
  isStart,
  isFinish,
  isWall,
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
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
    ></td>
  );
};

export default Node;
