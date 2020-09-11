let dictionary = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32] //need to upate as per the words i want

let cell = document.getElementsByClassName('cell')
//console.log(cell)
for (let i=0; i<25; i++) {
    let randomNumber = Math.floor(Math.random() * dictionary.length)
    //console.log(randomNumber)
    cell[i].innerText = dictionary[randomNumber]
    dictionary.splice(randomNumber,1)
}

//assign red colour to any 8 cells
for (let i=0; i<8;i++) {
    let randomNumber = Math.floor(Math.random() * cell.length)
    cell[randomNumber].style.color = 'red'
}
 
/*
var arr = [];
for (let i=0; i < 8; i++) {
    var r = Math.floor(Math.random() * dictionary.length);
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr)
*/
