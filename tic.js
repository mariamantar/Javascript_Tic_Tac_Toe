// first we want to have the ability to click the square and show the shape
// we want to add logic to determine the winner
// we want the code to notify who the winner is
// we need to create the logic for an artificial intellgience with the minimax algortithm


// here we initialize the board with a variable
var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
// here we have created an array that shows the winning combination, an array fulll of arrays
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

// the cell variable will store a reference to each cell in our html code, the query selector will select each element with the class of cell on the page
const cells = document.querySelectorAll('.cell');
// this is a function to start the game
startGame();

// now we write out what happens when the game starts, note: when we click replay the start game function will also run

function startGame() {
	document.querySelector(".endgame").style.display = "none";
  // here we are using the variable we set above to make an array load every number from 0 to 9. It will create an array of 9 elements and get just the keys for that element
	origBoard = Array.from(Array(9).keys());
  // we want the board to restart fresh once the user is done so we create a loop that goes though each cell
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
    // here we remove the background color after the person wins
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

// here we want to pass in the click event and log the id of whatever square was clicked with the turn function / human player
function turnClick(square) {
	turn(square.target.id, huPlayer)
}


// now we define the turn function, we pass the human and squareid
function turn(squareId, player) {
  // on this array it will show th eplayer who took a turn in that square
	origBoard[squareId] = player;
  // now the player can insert o's but we still need fucntionality
	document.getElementById(squareId).innerText = player;
}

// here we add logic to determine the winner and show the winning combination, above we were intiailizing th eplayer and allowing them to click inside the square id's 
