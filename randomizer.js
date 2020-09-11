let cellCol = []

let yellowCol = 7
let blackCol = 1
let redCol= 0
let blueCol = 0

let currentTurn =  ''
let turnOrder = document.getElementsByClassName('turn-order')
let randomNumber = Math.floor(Math.random() * 2)
if (randomNumber === 1) {
    redCol = 8 
    blueCol = 9
    currentTurn = 'blue'
}
else { redCol = 9
    blueCol = 8
    currentTurn = 'red'    
}

turnOrder[0].append(currentTurn)

let redGuess = document.getElementsByClassName('red-number')
let blueGuess = document.getElementsByClassName('blue-number')

redGuess[0].innerHTML = 'Number of Guesses/Cards for Red Team: ' + redCol
blueGuess[0].innerHTML = 'Number of Guesses/Cards for Blue Team: ' + blueCol

let dictionary = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32] //need to upate as per the words i want

let cell = document.getElementsByClassName('cell')

let colArr= ['red', 'blue', 'yellow', 'black']
while (cellCol.length<25) {

    let randomNumber = Math.floor(Math.random() * colArr.length)

        if (colArr[randomNumber] == 'red' && redCol >0) {
            cellCol.push(colArr[0])
            redCol--
        }
        if (colArr[randomNumber] == 'blue' && blueCol >0) {
            cellCol.push(colArr[1])
            blueCol--
        }
        if (colArr[randomNumber] == 'yellow' && yellowCol >0) {
            cellCol.push(colArr[2])
            yellowCol--
        }
        if (colArr[randomNumber] == 'black' && blackCol >0) {
            cellCol.push(colArr[3])
            blackCol--
        }
    }



for (let i=0; i<cell.length; i++) {
   //cellColhtml[i].setAttribute('class', cellCol[i] + ' cellCol')
   cell[i].className += ' '+ cellCol[i] + ' hidden display'
}



for (let i=0; i<25; i++) {
    let randomNumber = Math.floor(Math.random() * dictionary.length)
    //console.log(randomNumber)
    cell[i].innerText = dictionary[randomNumber]
    dictionary.splice(randomNumber,1)
}
function success () {
    alert ('You have guessed the correct word')
    cell.innerText = '' 

}

function failure() {
    alert ('You guessed the opponents word, Your turn is over')
    cell.innerText = '' 

}
function civilian() {
    alert ('You guessed a civilian word, turn over')
    cell.innerText = '' 

}
function bomb() {
    alert ('You guessed a bomb, your turn is over and so is the game')
}
function opponent() {
alert ('you guessed the opponent teams word, you turn is over')
}

//on click, remove the text display is none
for (let i=0; i<cell.length; i++) {
cell[i].addEventListener('click', function(e) {
    //e.preventDefault()
    
    if (cell[i].className.includes(currentTurn)) {
         success() }
    else if (cell[i].className.includes('yellow')) {
        civilian() }
    else if (cell[i].className.includes('black')) {
        bomb ()
    }
    else {
    opponent() }
    //cell[i].className =+ 
})}
//on click, initial gery should change to respective colour

//disbale mulitple clicks on same cell
//toggle between turns
//toggle between player and spymaster keeping the user input intacts

function toggleTurn() {
    if(currentTurn == 'red')
    {currentTurn = 'blue'
}
else if (currentTurn == 'blue')
{currentTurn = 'red'}
}