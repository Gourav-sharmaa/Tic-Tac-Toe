const readline = require('readline');
// The readline is used to handle command in the terminal for the input nd the output.
// This funstion is used to create a interface analyse the input and then give the result of the input by using the `readline`.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}
)
// This funstion is used to create a interface analyse the input and then give the result of the input by using the `readline`.

function initializeGame() {
  return Array(3).fill().map(() => Array(3).fill(null))

}
//  This function is used to made the grid of 3 x 3 by using initialize the game and the bolcks of the grid are empty. 
function getPlayerInput(player, grid, callback) {
  rl.question(`player ${player}, enter your move(row,col): `, (input) => {
    // This fuction will allow the the player to enter their move as well as to read the input.
    const [row, col] = input.split(',').map(Number)
    // This is the command to convert the values to the numbers and split the input bu commmas.
    if ( grid[rew][col] === null){
      // This function is to check the cells are empty or null with in the bounds.
      grid [row][col] = player
      // This is for marking the player the action of the players in the selected cells.
      callback(grid)
      // 
    } else {
      console.log ("spot taken, try again")
      // This is for giving the message to the user if their move is invalid or the place they choose is invalid.
      getPlayerInput(player, grid)
      // This is again prompts the user to enter their move again.
    }
  
  })
}

function switchPlayer(player){
  return player === 'X' ? 'O' : 'X'
  // This function will is used to switch the player while playing the game.
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
  // This function is used to determine the all winning conditions.
  return conditions.some(conditions =>
  conditions.every(cell => cell === player)
  // This is for checking and finding the winning condition are meet by any player.
)
}

function printGrid(grid) {
  grid.forEach(row => console.log(row.join('|')))
  // This function is used to print thr grid of all rows and to replace the nulls values.
  Console.log('\n')
  // For printing a new line.
}

function nextMove(grid) {
  printGrid(grid)
  // By this the state of the current grid will print.
  if (checkWin(grid, currentPlayer)) {
    console.log(`player ${currnetPlayer} wins!`)
    // This is for declaring the winner if any player won the game.
    rl.close()

  } else if (checkDraw(grid)){
    console.log("it's a draw!")
    // This function is for declaring the Draw.
    rl.close()
  } else {
    currentPlayer = switchPlayer(currentPlayer, grid, nextMove)
    // This is for switch between the players and to enter their move.
  }
}
function checkDraw(grid) {
  return grid.flat().every(cell => cell  == null)
  // This is basically declaring the draw condition will meet and there is no any winning of the game.
}
   let grid = initializeGame()
   // this will intialize the grid of the game.
   let currentPlayer = 'X'
   // This is for confirming that the game will always start by player X.

   getPlayerInput(currentPlayer, grid, nextMove)
   // This fubction is for staring the game by giving the place to the player to enter their move.

