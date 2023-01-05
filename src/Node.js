import React from "react";
import "./Node.css";

const Node = ({ row, col, isStart, isFinish, isWall, mouseIsOver }) => {
  // adicionar estilos diferentes para nodes de inicio e de fim
  const additionalClass = isStart
    ? "start"
    : isFinish
    ? "finish"
    : isWall
    ? "wall"
    : "";

  return <td className={`node ${additionalClass}`}></td>;
};

export default Node;
