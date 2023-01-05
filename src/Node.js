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
  // TODO
  // Desenhar paredes: quando o mouse é clicado, começa a desenhar, quando o mouse é levantado, para de desenhar

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
