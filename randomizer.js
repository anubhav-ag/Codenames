let cellCol = []

let yellowCol = 7
let blackCol = 1
let redCol= 0
let blueCol = 0
let clickNos = 0
let clue = ''

//How to Determine the chances one gets
let noofGuess = document.querySelector('.guess')
let guessClue = document.querySelector('.clues')
//console.log(guessClue)
noofGuess.addEventListener('change', function(e){
    clickNos = noofGuess.value
    clickNos++
    clue = guessClue.value
    alert('You can guess a maximum of ' + clickNos + ' words related to ' + clue)
})

//Player mode - when all cells are grey colour
let playerButton = document.getElementById('player')
let row = document.getElementsByClassName('row')

player.addEventListener('click', function(e) {
    for (let i=1; i < row.length; i++) {
    row[i].classList.add('player') }
})
//Spymaster mode - when all cell colour are displayed
let spymasterButton = document.getElementById('spymaster')

spymasterButton.addEventListener('click', function(e){ 
    for (let i=1; i < row.length; i++) {
        row[i].classList.remove('player') }

        //i still need to update the black class text attribute to white
})
//determine current turn
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
    turnGuess[0].innerHTML = 'Current Turn is: ' + currentTurn
}

let redTurns=redCol;
let blueTurns=blueCol;

refreshPage(redTurns, blueTurns, currentTurn)

// Setting up the board for the game
let dictionary = ['Acne','Acre','Addendum','Advertise','Aircraft','Aisle','Alligator','Alphabetize','America','Ankle','Apathy','Applause','Applesauc','Application','Archaeologist','Aristocrat','Arm','Armada','Asleep','Astronaut','Athlete','Atlantis','Aunt','Avocado','Baby-Sitter','Backbone','Bag','Baguette','Bald','Balloon','Banana','Banister','Baseball','Baseboards','Basketball','Bat','Battery','Beach','Beanstalk','Bedbug','Beer','Beethoven','Belt','Bib','Bicycle','Big','Bike','Billboard','Bird','Birthday','Bite','Blacksmith','Blanket','Bleach','Blimp','Blossom','Blueprint','Blunt','Blur','Boa','Boat','Bob','Bobsled','Body','Bomb','Bonnet','Book','Booth','Bowtie','Box','Boy','Brainstorm','Brand','Brave','Bride','Bridge','Broccoli','Broken','Broom','Bruise','Brunette','Bubble','Buddy','Buffalo','Bulb','Bunny','Bus','Buy','Cabin','Cafeteria','Cake','Calculator','Campsite','Can','Canada','Candle','Candy','Cape','Capitalism','Car','Cardboard','Cartography','Cat','Cd','Ceiling','Cell','Century','Chair','Chalk','Champion','Charger','Cheerleader','Chef','Chess','Chew','Chicken','Chime','China','Chocolate','Church','Circus','Clay','Cliff','Cloak','Clockwork','Clown','Clue','Coach','Coal','Coaster','Cog','Cold','College','Comfort','Computer','Cone','Constrictor','Continuum','Conversation','Cook','Coop','Cord','Corduroy','Cot','Cough','Cow','Cowboy','Crayon','Cream','Crisp','Criticize','Crow','Cruise','Crumb','Crust','Cuff','Curtain','Cuticle','Czar','Dad','Dart','Dawn','Day','Deep','Defect','Dent','Dentist','Desk','Dictionary','Dimple','Dirty','Dismantle','Ditch','Diver','Doctor','Dog','Doghouse','Doll','Dominoes','Door','Dot','Drain','Draw','Dream','Dress','Drink','Drip','Drums','Dryer','Duck','Dump','Dunk','Dust','Ear','Eat','Ebony','Elbow','Electricity','Elephant','Elevator','Elf','Elm','Engine','England','Ergonomic','Escalator','Eureka','Europe','Evolution','Extension','Eyebrow','Fan','Fancy','Fast','Feast','Fence','Feudalism','Fiddle','Figment','Finger','Fire','First','Fishing','Fix','Fizz','Flagpole','Flannel','Flashlight','Flock','Flotsam','Flower','Flu','Flush','Flutter','Fog','Foil','Football','Forehead','Forever','Fortnight','France','Freckle','Freight','Fringe','Frog','Frown','Gallop','Game','Garbage','Garden','Gasoline','Gem','Ginger','Gingerbread','Girl','Glasses','Goblin','Gold','Goodbye','Grandpa','Grape','Grass','Gratitude','Gray','Green','Guitar','Gum','Gumball','Hair','Half','Handle','Handwriting','Hang','Happy','Hat','Hatch','Headache','Heart','Hedge','Helicopter','Hem','Hide','Hill','Hockey','Homework','Honk','Hopscotch','Horse','Hose','Hot','House','Houseboat','Hug','Humidifier','Hungry','Hurdle','Hurt','Hut','Ice','Implode','Inn','Inquisition','Intern','Internet','Invitation','Ironic','Ivory','Ivy','Jade','Japan','Jeans','Jelly','Jet','Jig','Jog','Journal','Jump','Key','Killer','Kilogram','King','Kitchen','Kite','Knee','Kneel','Knife','Knight','Koala','Lace','Ladder','Ladybug','Lag','Landfill','Lap','Laugh','Laundry','Law','Lawn','Lawnmower','Leak','Leg','Letter','Level','Lifestyle','Ligament','Light','Lightsaber','Lime','Lion','Lizard','Log','Loiterer','Lollipop','Loveseat','Loyalty','Lunch','Lunchbox','Lyrics','Machine','Macho','Mailbox','Mammoth','Mark','Mars','Mascot','Mast','Matchstick','Mate','Mattress','Mess','Mexico','Midsummer','Mine','Mistake','Modern','Mold','Mom','Monday','Money','Monitor','Monster','Mooch','Moon','Mop','Moth','Motorcycle','Mountain','Mouse','Mower','Mud','Music','Mute','Nature','Negotiate','Neighbor','Nest','Neutron','Niece','Night','Nightmare','Nose','Oar','Observatory','Office','Oil','Old','Olympian','Opaque','Opener','Orbit','Organ','Organize','Outer','Outside','Ovation','Overture','Pail','Paint','Pajamas','Palace','Pants','Paper','Paper','Park','Parody','Party','Password','Pastry','Pawn','Pear','Pen','Pencil','Pendulum','Penis','Penny','Pepper','Personal','Philosopher','Phone','Photograph','Piano','Picnic','Pigpen','Pillow','Pilot','Pinch','Ping','Pinwheel','Pirate','Plaid','Plan','Plank','Plate','Platypus','Playground','Plow','Plumber','Pocket','Poem','Point','Pole','Pomp','Pong','Pool','Popsicle','Population','Portfolio','Positive','Post','Princess','Procrastinate','Protestant','Psychologist','Publisher','Punk','Puppet','Puppy','Push','Puzzle','Quarantine','Queen','Quicksand','Quiet','Race','Radio','Raft','Rag','Rainbow','Rainwater','Random','Ray','Recycle','Red','Regret','Reimbursement','Retaliate','Rib','Riddle','Rim','Rink','Roller','Room','Rose','Round','Roundabout','Rung','Runt','Rut','Sad','Safe','Salmon','Salt','Sandbox','Sandcastle','Sandwich','Sash','Satellite','Scar','Scared','School','Scoundrel','Scramble','Scuff','Seashell','Season','Sentence','Sequins','Set','Shaft','Shallow','Shampoo','Shark','Sheep','Sheets','Sheriff','Shipwreck','Shirt','Shoelace','Short','Shower','Shrink','Sick','Siesta','Silhouette','Singer','Sip','Skate','Skating','Ski','Slam','Sleep','Sling','Slow','Slump','Smith','Sneeze','Snow','Snuggle','Song','Space','Spare','Speakers','Spider','Spit','Sponge','Spool','Spoon','Spring','Sprinkler','Spy','Square','Squint','Stairs','Standing','Star','State','Stick','Stockholder','Stoplight','Stout','Stove','Stowaway','Straw','Stream','Streamline','Stripe','Student','Sun','Sunburn','Sushi','Swamp','Swarm','Sweater','Swimming','Swing','Tachometer','Talk','Taxi','Teacher','Teapot','Teenager','Telephone','Ten','Tennis','Thief','Think','Throne','Through','Thunder','Tide','Tiger','Time','Tinting','Tiptoe','Tiptop','Tired','Tissue','Toast','Toilet','Tool','Toothbrush','Tornado','Tournament','Tractor','Train','Trash','Treasure','Tree','Triangle','Trip','Truck','Tub','Tuba','Tutor','Television','Twang','Twig','Twitterpated','Type','Unemployed','Upgrade','Vest','Vision','Wag','Water','Watermelon','Wax','Wedding','Weed','Welder','Whatever','Wheelchair','Whiplash','Whisk','Whistle','White','Wig','Will','Windmill','Winter','Wish','Wolf','Wool','World','Worm','Wristwatch','Yardstick','Zamboni','Zen','Zero','Zipper','Zone','Zoo'] //need to upate as per the words i want

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
    else {blueTurns--}
    //console.log(`RED: ${redTurns} BLUE: ${blueTurns}`)
}

function failure() {
    alert ('You guessed the opponents word, Your turn is over')
    toggleTurn()
    if (currentTurn == 'red') {
        redTurns-- 
    }
    else {blueTurns--}
    console.log(`RED: ${redTurns} BLUE: ${blueTurns}`)
}
function civilian() {
    alert ('You guessed a civilian word, turn over')
     toggleTurn()
}
function bomb() {
    alert ('You guessed a bomb, your turn is over and so is the game')
//once clicked disble all clicks
}

//on click, remove the text display to not click on it again
//Playing the game
for (let i=0; i<cell.length; i++) {
cell[i].addEventListener('click', function(e) {    
    if (cell[i].innerText != ''){
        cell[i].innerText = '' 
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
        refreshPage(redTurns,blueTurns,currentTurn);
    }
    else {
        return false
    } 
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

//game over -  need to code this out
/*
when bomb is called or either red or blue counter is 0
one team if there guess counter is 0
if bomb then the other team than the turn chance wins
*/
/*
function gameOver() {
    if ()
    
}
*/
