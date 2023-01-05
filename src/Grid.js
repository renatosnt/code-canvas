import React from "react";
import Node from "./Node";
import "./Grid.css";
import Menu from "./Menu";

const Grid = () => {
  const [gridSize, setGridSize] = React.useState([15, 25]);
  const [start, setStart] = React.useState([5, 0]);
  const [finish, setFinish] = React.useState([5, 25]);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [isMoving, setIsMoving] = React.useState(false);
  const [movingNode, setMovingNode] = React.useState(null);

  const [grid, setGrid] = React.useState([]);

  React.useEffect(() => {
    const newGrid = gridConstructor();
    setGrid(newGrid);
  }, []);

  function nodeConstructor(row, col) {
    const node = {
      row,
      col,
      isStart: row === start[0] && col === start[1],
      isFinish: row === finish[0] && col === finish[1],
      isWall: false,
    };
    return node;
  }

  function gridConstructor() {
    const initialGrid = [];
    const sizeRows = gridSize[0];
    const sizeCols = gridSize[1];

    for (let i = 0; i <= sizeRows; i++) {
      const row = [];
      for (let j = 0; j <= sizeCols; j++) {
        row.push(nodeConstructor(i, j));
      }
      initialGrid.push(row);
    }
    return initialGrid;
  }

  function startDrawing(event, row, col) {
    event.preventDefault();
    if (!grid[row][col].isStart && !grid[row][col].isFinish) {
      setIsDrawing(true);
    } else {
      if (grid[row][col].isStart) {
        grid[row][col].isStart = false;
        setMovingNode("start");
      } else {
        grid[row][col].isFinish = false;
        setMovingNode("finish");
      }
      setIsMoving(true);
    }
  }

  function finishDrawing(event, row, col) {
    event.preventDefault();
    if (isDrawing) {
      setIsDrawing(false);
    }
    if (isMoving) {
      const newGrid = grid;
      if (movingNode === "start") {
        newGrid[row][col].isStart = true;
      } else {
        newGrid[row][col].isFinish = true;
      }
      setGrid(newGrid);
      setMovingNode(null);
      setIsMoving(false);
    }
  }

  function draw({ target }, row, col) {
    if (isDrawing && !grid[row][col].isStart && !grid[row][col].isFinish) {
      target.className += " wall";
      const newGrid = grid;
      newGrid[row][col].isWall = true;
      setGrid(newGrid);
    }
  }

  function clearGrid() {
    console.log("clear grid");
    const newGrid = grid;
    newGrid.map((row) =>
      row.map((node) => {
        console.log(node);
        node.isWall = false;
      })
    );
    setGrid(newGrid);
  }

  //
  return (
    <>
      <Menu clearGrid={clearGrid} />
      <table className="grid">
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((node) => (
                <Node
                  {...node}
                  key={node.col}
                  onMouseDown={(event) =>
                    startDrawing(event, node.row, node.col)
                  }
                  onMouseUp={(event) =>
                    finishDrawing(event, node.row, node.col)
                  }
                  onMouseEnter={(event) => draw(event, node.row, node.col)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Grid;
