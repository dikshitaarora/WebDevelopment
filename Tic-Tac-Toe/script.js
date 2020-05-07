// Restart Game Button
var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll("td");
var playerX = true ;
//Winner matrix : There are total 8 ways to win
//3 Rows, 3 Columns and 2 Diagonals
const win =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click',clearBoard)

// Create a function that will check the square marker
function changeMarker(){
  if(playerX){
    this.textContent = 'X' ;
  }else{
    this.textContent = 'O' ;
  }
  playerX = !playerX ;
  //  this.textContent = prompt("Enter X or O : ") ;
    // if(this.textContent === ''){
    //   this.textContent = 'X';
    //   // console.log(marker)
    // }else if (this.textContent === 'X') {
    //   this.textContent = 'O';
    // }else {
    //   this.textContent = '';
    // }
    checkWinner() ;
};

function enterValue(){

}
// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}

//Loop to check winner

function checkWinner(){
  console.log("I'm in checkWinner") ;
  var player_won = false ;
  var player = '' ;
  for(var i=0 ; i<win.length ; i++){
    const win_condition = win[i] ;
    var a = squares[win_condition[0]].textContent ;
    var b = squares[win_condition[1]].textContent ;
    var c = squares[win_condition[2]].textContent ;
    if (a === '' || b === '' || c === '') {
            continue;
    }
    if (a === b && b === c) {
        player_won = true;
        player = a ;
        break ;
    }
  }
  if(player_won){
    console.log("Congratulations! Player "+a+" has won! Please press 'Restart' to play again. ") ;
  }

}
