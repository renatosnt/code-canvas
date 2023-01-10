import React from "react";
import Node from "./Node";
import "./Grid.css";
import Menu from "./Menu";
import { dfs } from "./algorithms/dfs";
import { bfs } from "./algorithms/bfs";
import Help from "./Help";
import Footer from "./Footer";

const Grid = () => {
  const [rows, cols] = [17, 50];
  const [gridSize, setGridSize] = React.useState([rows, cols]);
  const [startCoordinates, setStartCoordinates] = React.useState([7, 1]);
  const [finishCoordinates, setFinishCoordinates] = React.useState([7, 34]);
  const [warningState, setWarningState] = React.useState(false);

  const [isRunning, setIsRunning] = React.useState(false);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [isMoving, setIsMoving] = React.useState(false);
  const [movingNode, setMovingNode] = React.useState(null);
  const [openHelp, setOpenHelp] = React.useState(false);

  const [grid, setGrid] = React.useState([]);

  function nodeConstructor(row, col) {
    const node = {
      row,
      col,
      isStart: row === startCoordinates[0] && col === startCoordinates[1],
      isFinish: row === finishCoordinates[0] && col === finishCoordinates[1],
      isWall: false,
      isVisited: false,
      previous: null,
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
    if (isRunning) return;
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
      const newGrid = grid.slice();
      if (movingNode === "start") {
        newGrid[row][col].isStart = true;
        setStartCoordinates([row, col]);
      } else if (movingNode === "finish") {
        newGrid[row][col].isFinish = true;
        setFinishCoordinates([row, col]);
      }
      setGrid(newGrid);
      setMovingNode(null);
      setIsMoving(false);
    }
  }

  function draw(event, row, col) {
    if (isRunning) return;
    if (
      (isDrawing || event.type === "click") &&
      !grid[row][col].isStart &&
      !grid[row][col].isFinish
    ) {
      const newGrid = grid.slice();
      newGrid[row][col].isWall = true;
      setGrid(newGrid);
    }
  }

  function clearWalls() {
    if (isRunning) return;
    const newGrid = grid.slice();

    newGrid.map((row) =>
      row.map((node) => {
        node.isWall = false;
      })
    );
    setGrid(newGrid);
  }

  function runResultingPath(resultingPath) {
    for (let i = 0; i <= resultingPath.length; i++) {
      setTimeout(() => {
        const curr = resultingPath[i];
        // troca o estilo de acordo com o id
        const nodeClassName = document.getElementById(
          `node-${curr.row}-${curr.col}`
        ).className;

        if (nodeClassName !== "node start" && nodeClassName !== "node finish") {
          document.getElementById(`node-${curr.row}-${curr.col}`).className =
            "node node-result";
        }
      }, 25 * i);
    }
  }

  function runAnimation(visitedNodes, resultingPath) {
    visitedNodes.shift();
    for (let i = 0; i <= visitedNodes.length; i++) {
      if (i === visitedNodes.length) {
        // animar resultingPath
        setTimeout(() => {
          runResultingPath(resultingPath);
        }, 25 * i);
      }
      setTimeout(() => {
        const curr = visitedNodes[i];
        // troca o estilo de acordo com o id
        const nodeClassName = document.getElementById(
          `node-${curr.row}-${curr.col}`
        ).className;

        if (nodeClassName !== "node start" && nodeClassName !== "node finish") {
          document.getElementById(`node-${curr.row}-${curr.col}`).className =
            "node node-visited";
        }
      }, 25 * i);
    }
  }

  function backtrackPath(finish) {
    const path = [];
    let curr = finish;
    while (curr !== null) {
      path.unshift(curr);
      curr = curr.previous;
    }

    return path;
  }

  function runAlgorithm(algorithm) {
    if (isRunning) return;
    setIsRunning(true);
    const start = grid[startCoordinates[0]][startCoordinates[1]];
    const finish = grid[finishCoordinates[0]][finishCoordinates[1]];

    switch (algorithm) {
      case "dfs":
        var visitedNodes = dfs(grid, start, finish);
        break;
      case "dijkstra":
        break;
      case "bfs":
        var visitedNodes = bfs(grid, start, finish);
        break;
      default:
        break;
    }

    const path = backtrackPath(finish);
    runAnimation(visitedNodes, path);
  }

  function resetGrid() {
    setWarningState(false);
    setIsRunning(false);

    setGrid(gridConstructor());
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    grid.map((row) => {
      row.map((node) => {
        const nodeElement = document.getElementById(
          `node-${node.row}-${node.col}`
        );
        if (
          nodeElement.className !== "node start" &&
          nodeElement.className !== "node finish"
        ) {
          nodeElement.className = "node";
        }
      });
    });
  }

  function showWarning() {
    if (isRunning) setWarningState(true);
  }

  React.useEffect(() => {
    const newGrid = gridConstructor();
    setGrid(newGrid);
    setOpenHelp(true);
  }, []);

  return (
    <>
      <Menu
        clearWalls={clearWalls}
        resetGrid={resetGrid}
        runAlgorithm={runAlgorithm}
        openHelp={openHelp}
        setOpenHelp={setOpenHelp}
        warningState={warningState}
      />
      <Help open={openHelp} setOpenHelp={setOpenHelp} />
      <table
        className={isMoving ? "grid grid-on-moving" : "grid"}
        onClick={showWarning}
      >
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((node, idx) => (
                <Node
                  {...node}
                  key={idx}
                  onMouseDown={(event) =>
                    startDrawing(event, node.row, node.col)
                  }
                  onMouseUp={(event) =>
                    finishDrawing(event, node.row, node.col)
                  }
                  onMouseEnter={(event) => draw(event, node.row, node.col)}
                  onClick={(event) => draw(event, node.row, node.col)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
};

export default Grid;
