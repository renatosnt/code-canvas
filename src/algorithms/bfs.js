export function bfs(grid, start, finish) {
  const [numRows, numCols] = [grid.length, grid[0].length];

  const totalPath = [];
  const queue = [];
  queue.push(start);
  while (queue.length) {
    const curr = queue.shift();
    if (curr === finish) return totalPath;

    if (curr.isWall || curr.isVisited) continue;

    curr.isVisited = true;
    totalPath.push(curr);
    const [i, j] = [curr.row, curr.col];
    // para todos adjacentes ao curr, não visitados, adicione-os a stack

    // baixo
    if (
      i + 1 < numRows &&
      !grid[i + 1][j].isVisited &&
      !grid[i + 1][j].isWall
    ) {
      grid[i + 1][j].previous = curr;
      queue.push(grid[i + 1][j]);
    }

    // esquerda
    if (j - 1 >= 0 && !grid[i][j - 1].isVisited && !grid[i][j - 1].isWall) {
      grid[i][j - 1].previous = curr;
      queue.push(grid[i][j - 1]);
    }
    // cima
    if (i - 1 >= 0 && !grid[i - 1][j].isVisited && !grid[i - 1][j].isWall) {
      grid[i - 1][j].previous = curr;
      queue.push(grid[i - 1][j]);
    }

    // direita
    if (
      j + 1 < numCols &&
      !grid[i][j + 1].isVisited &&
      !grid[i][j + 1].isWall
    ) {
      grid[i][j + 1].previous = curr;
      queue.push(grid[i][j + 1]);
    }
  }
}
