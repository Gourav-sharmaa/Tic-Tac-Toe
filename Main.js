const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}
)
function initializeGame() {
  return Array(3).fill().map(() => Array(3).fill(null))

}

function getPlayerInput(player, grid) {
  rl.question(`player ${player}, enter your move(row,col): `, (input) => {
    const [row, col] = input.split(',').map(Number)
    if ( grid[rew][col] === null){
      grid [row][col] = player
      callback(grid)
    } else {
      console.log ("spot taken, try again")
      getPlayerInput(player, grid)
    }
  
  })
}

function switchPlayer(player){
  return player === 'X' ? 'O' : 'X'
}

function checkWin(grid, player) {
  const conditions =[
    [grid[0][0], grid[0][1], grid[0][2]],
    [grid[1][0], grid[1][1], grid[1][2]],
    [grid[2][0], grid[2][1], grid[2][2]],
    [grid[0][0], grid[1][0], grid[2][0]],
    [grid[0][1], grid[1][1], grid[2][1]],
    [grid[0][2], grid[1][2], grid[2][2]],
    [grid[0][0], grid[1][1], grid[2][2]],
    [grid[2][0], grid[1][1], grid[0][2]],
  ]
  return conditions.some(conditions =>
  conditions.every(cell => cell === player)
)
}
function printGrid(grid) {
  grid.forEach(row => console.log(row.join('|')))
  Console.log('|')
}