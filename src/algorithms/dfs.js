export function dfs(grid, start, finish) {
  const [numRows, numCols] = [grid.length, grid[0].length];
  const stack = [];
  const path = [];

  stack.push(start);
  while (stack.length) {
    const curr = stack.pop();
    const [i, j] = [curr.row, curr.col];

    if (curr === finish) {
      path.push(finish);
      return path;
    }

    if (!curr.isVisited && !curr.isWall) {
      curr.isVisited = true;
      path.push(curr);
      // para todos adjacentes ao curr, não visitados, adicione-os a stack

      // baixo
      if (
        i + 1 < numRows &&
        !grid[i + 1][j].isVisited &&
        !grid[i + 1][j].isWall
      ) {
        grid[i + 1][j].previous = curr;
        stack.push(grid[i + 1][j]);
      }

      // esquerda
      if (j - 1 >= 0 && !grid[i][j - 1].isVisited && !grid[i][j - 1].isWall) {
        grid[i][j - 1].previous = curr;
        stack.push(grid[i][j - 1]);
      }
      // cima
      if (i - 1 >= 0 && !grid[i - 1][j].isVisited && !grid[i - 1][j].isWall) {
        grid[i - 1][j].previous = curr;
        stack.push(grid[i - 1][j]);
      }

      // direita
      if (
        j + 1 < numCols &&
        !grid[i][j + 1].isVisited &&
        !grid[i][j + 1].isWall
      ) {
        grid[i][j + 1].previous = curr;
        stack.push(grid[i][j + 1]);
      }
    }
  }

  return path;
}
