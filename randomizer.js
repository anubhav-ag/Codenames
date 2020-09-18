//all variable declarations
let cellCol = []

let yellowCol = 7
let blackCol = 1
let redCol= 0
let blueCol = 0
let clickNos = 0
let clue = ''

//How to Determine the chances one team gets
let noofGuess = document.querySelector('.guess')
let guessClue = document.querySelector('.clues')

noofGuess.addEventListener('change', function(e){
    clickNos = noofGuess.value
    clickNos++
    clue = guessClue.value
    alert(currentTurn+ ' team can guess a maximum of ' + clickNos + ' words related to ' + clue)
})

//Player mode - when all cells are grey colour
let playerButton = document.getElementById('player')
let row = document.getElementsByClassName('row')

player.addEventListener('click', function(e) {
    for (let i=1; i < row.length; i++) {
    row[i].classList.add('player') }
    for (let i=0; i<cell.length; i++) {
        if (cell[i].className.includes('black')) {
        cell[i].style.color = "black"
        }
    } 
})

//Spymaster mode - when all cell colour are displayed
let spymasterButton = document.getElementById('spymaster')
spymasterButton.addEventListener('click', function(e){ 
    for (let i=1; i < row.length; i++) {
        row[i].classList.remove('player') }
    
    for (let i=0; i<cell.length; i++) {
        if (cell[i].className.includes('black')) {
        cell[i].style.color = "white"
        }
    } 
    })

//Determine current turn
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

//Operating/upating on the turns/chances
let redGuess = document.getElementsByClassName('red-number')
let blueGuess = document.getElementsByClassName('blue-number')
let turnGuess = document.getElementsByClassName('turn')

function refreshPage(redCount, blueCount, turnColour) {
    redGuess[0].innerHTML = 'Number of Guesses/Cards for Red Team: ' + redCount
    blueGuess[0].innerHTML = 'Number of Guesses/Cards for Blue Team: ' + blueCount
    turnGuess[0].innerHTML = 'Current Turn is: ' + currentTurn+ ' team'
}

let redTurns=redCol;
let blueTurns=blueCol;

refreshPage(redTurns, blueTurns, currentTurn)

// Setting up the board for the game
let dictionary = ['AFRICA','AGENT','AIR','ALIEN','ALPS','AMAZON','AMBULANCE','AMERICA','ANGEL','ANTARCTICA','APPLE','ARM','ATLANTIS','AUSTRALIA','AZTEC','BACK','BALL','BAND','BANK','BAR','BARK','BAT','BATTERY','BEACH','BEAR','BEAT','BED','BEIJING','BELL','BELT','BERLIN','BERMUDA','BERRY','BILL','BLOCK','BOARD','BOLT','BOMB','BOND','BOOM','BOOT','BOTTLE','BOW','BOX','BRIDGE','BRUSH','BUCK','BUFFALO','BUG','BUGLE','BUTTON','CALF','CANADA','CAP','CAPITAL','CAR','CARD','CARROT','CASINO','CAST','CAT','CELL','CENTAUR','CENTER','CHAIR','CHANGE','CHARGE','CHECK','CHEST','CHICK','CHINA','CHOCOLATE','CHURCH','CIRCLE','CLIFF','CLOAK','CLUB','CODE','COLD','COMIC','COMPOUND','CONCERT','CONDUCTOR','CONTRACT','COOK','COPPER','COTTON','COURT','COVER','CRANE','CRASH','CRICKET','CROSS','CROWN','CYCLE','CZECH','DANCE','DATE','DAY','DEATH','DECK','DEGREE','DIAMOND','DICE','DINOSAUR','DISEASE','DOCTOR','DOG','DRAFT','DRAGON','DRESS','DRILL','DROP','DUCK','DWARF','EAGLE','EGYPT','EMBASSY','ENGINE','ENGLAND','EUROPE','EYE','FACE','FAIR','FALL','FAN','FENCE','FIELD','FIGHTER','FIGURE','FILE','FILM','FIRE','FISH','FLUTE','FLY','FOOT','FORCE','FOREST','FORK','FRANCE','GAME','GAS','GENIUS','GERMANY','GHOST','GIANT','GLASS','GLOVE','GOLD','GRACE','GRASS','GREECE','GREEN','GROUND','HAM','HAND','HAWK','HEAD','HEART','HELICOPTER','HIMALAYAS','HOLE','HOLLYWOOD','HONEY','HOOD','HOOK','HORN','HORSE','HORSESHOE','HOSPITAL','HOTEL','ICE','ICE CREAM','INDIA','IRON','IVORY','JACK','JAM','JET','JUPITER','KANGAROO','KETCHUP','KEY','KID','KING','KIWI','KNIFE','KNIGHT','LAB','LAP','LASER','LAWYER','LEAD','LEMON','LEPRECHAUN','LIFE','LIGHT','LIMOUSINE','LINE','LINK','LION','LITTER','LOCH NESS','LOCK','LOG','LONDON','LUCK','MAIL','MAMMOTH','MAPLE','MARBLE','MARCH','MASS','MATCH','MERCURY','MEXICO','MICROSCOPE','MILLIONAIRE','MINE','MINT','MISSILE','MODEL','MOLE','MOON','MOSCOW','MOUNT','MOUSE','MOUTH','MUG','NAIL','NEEDLE','NET','NEW YORK','NIGHT','NINJA','NOTE','NOVEL','NURSE','NUT','OCTOPUS','OIL','OLIVE','OLYMPUS','OPERA','ORANGE','ORGAN','PALM','PAN','PANTS','PAPER','PARACHUTE','PARK','PART','PASS','PASTE','PENGUIN','PHOENIX','PIANO','PIE','PILOT','PIN','PIPE','PIRATE','PISTOL','PIT','PITCH','PLANE','PLASTIC','PLATE','PLATYPUS','PLAY','PLOT','POINT','POISON','POLE','POLICE','POOL','PORT','POST','POUND','PRESS','PRINCESS','PUMPKIN','PUPIL','PYRAMID','QUEEN','RABBIT','RACKET','RAY','REVOLUTION','RING','ROBIN','ROBOT','ROCK','ROME','ROOT','ROSE','ROULETTE','ROUND','ROW','RULER','SATELLITE','SATURN','SCALE','SCHOOL','SCIENTIST','SCORPION','SCREEN','SCUBA DIVER','SEAL','SERVER','SHADOW','SHAKESPEARE','SHARK','SHIP','SHOE','SHOP','SHOT','SINK','SKYSCRAPER','SLIP','SLUG','SMUGGLER','SNOW','SNOWMAN','SOCK','SOLDIER','SOUL','SOUND','SPACE','SPELL','SPIDER','SPIKE','SPINE','SPOT','SPRING','SPY','SQUARE','STADIUM','STAFF','STAR','STATE','STICK','STOCK','STRAW','STREAM','STRIKE','STRING','SUB','SUIT','SUPERHERO','SWING','SWITCH','TABLE','TABLET','TAG','TAIL','TAP','TEACHER','TELESCOPE','TEMPLE','THEATER','THIEF','THUMB','TICK','TIE','TIME','TOKYO','TOOTH','TORCH','TOWER','TRACK','TRAIN','TRIANGLE','TRIP','TRUNK','TUBE','TURKEY','UNDERTAKER','UNICORN','VACUUM','VAN','VET','WAKE','WALL','WAR','WASHER','WASHINGTON','WATCH','WATER','WAVE','WEB','WELL','WHALE','WHIP','WIND','WITCH','WORM','YARD']
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
       cell[i].className += ' '+ cellCol[i]
}

for (let i=0; i<25; i++) {
    let randomNumber = Math.floor(Math.random() * dictionary.length)
        cell[i].innerText = dictionary[randomNumber]
    dictionary.splice(randomNumber,1)
}

//Change Turns
function toggleTurn() {    
    if(currentTurn == 'red') {
        currentTurn = 'blue'
    }
    else if (currentTurn == 'blue') {
        currentTurn = 'red'
    }
    noofGuess.value=''
    guessClue.value=''
    return currentTurn
}

//Result Conditions
function success () {
    alert ('You have guessed the correct word')
    
    if (currentTurn == 'red') {
        redTurns-- 
    }
    else {blueTurns--}}

function failure() {
    alert ('You guessed the opponents word, Your turn is over')
    toggleTurn()
    if (currentTurn == 'red') {
        redTurns-- 
    }
    else {blueTurns--}
}
function civilian() {
    alert ('You guessed a civilian word, turn over')
     toggleTurn()
}
function bomb() {
    toggleTurn()
    alert('You guessed a bomb, the game is over, ' +currentTurn + ' team wins')
}

//on click, remove the text display to not click on it again
//Playing the game
for (let i=0; i<cell.length; i++) {
cell[i].addEventListener('click', function(e) {    
    if (cell[i].innerText != '' && clickNos>0){
        cell[i].innerText = ''
        clickNos--

        if (cell[i].className.includes(currentTurn)) {
         success()
        }
        else if (cell[i].className.includes('yellow')) {
            civilian() 
        }   
        else if (cell[i].className.includes('black')) {
            bomb ()
        }
        else {
            failure() 
        }
        
        if (redTurns===0 || blueTurns===0) {
            alert('The game is over ' +currentTurn + ' team wins') }
    }
    else if (clickNos==0) {
        toggleTurn()
        alert ('You\'re out of guesses')}

    else {
        return false
    }
    refreshPage(redTurns,blueTurns,currentTurn)
 
})}

//End Turn click event
let endTurn = document.getElementById("end-turn") 
endTurn.addEventListener('click', function(event){
  let changeTurn = toggleTurn()
    turnGuess[0].innerHTML = "Current Turn is: " + changeTurn
    alert('Turn has changed')
    noofGuess.value=''
    guessClue.value=''
})