/**
 *
 * @param {matriz de objetos} grid
 * @param {objeto Node} start
 * @param {objeto Node} finish
 */

// {
//   row,
//   col,
//   isStart,
//   isFinish,
//   isWall,
//   isVisited,
//   onMouseDown,
//   onMouseUp,
//   onMouseEnter,
// }

export function dfs(grid, start, finish) {
  const [numRows, numCols] = [grid.length, grid[0].length];
  const stack = [];
  const path = [];

  stack.push(start);

  while (stack.length) {
    const curr = stack.pop();

    if (!curr || curr.isFinish) {
      return path;
    }

    if (!curr.isVisited) {
      curr.isVisited = true;
      path.push(curr);
    }

    const [i, j] = [curr.row, curr.col];

    if (j + 1 <= numCols) {
      stack.push(grid[i][j + 1]);
    }
    if (j - 1 >= 0) {
      stack.push(grid[i][j - 1]);
    }
    if (i + 1 <= numRows) {
      stack.push(grid[i + 1][j]);
    }
    if (i - 1 >= 0) {
      stack.push(grid[i - 1][j]);
    }
  }
}
