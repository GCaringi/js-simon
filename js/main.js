/*--------------------
   Global Variable
--------------------*/
let size = 5;
let point = 0;



/*--------------------
  Logic Function
--------------------*/
function numIntegerPrompt(){
    let num;
    do{
        num = Number(prompt("Inserisci un numero"))
    }while(isNaN(num) || !Number.isInteger(num));
    return num;
}


function generateRandomNum(min, max){
    return Math.floor((Math.random() * (max - min))+min);
}

function generateRandomArr(size){
    let retArray = [];
    for (let i = 0; i < size; i++){
        retArray.push(generateRandomNum(1,100));
    }
    return retArray;  
}

function isInArray(num, arr){
    if (arr.includes(num)){
        return true;
    }else{
        return false;
    }
}



/*--------------------
     DOM Function
--------------------*/
function printNumber(section, size){
    for (let i = 0; i < size; i++){
        const number = document.createElement("div");
        number.classList.add("number");
        number.textContent = newArr[i];
        section.append(number);
    }
}

/*--------------------
        Main
--------------------*/

const rndNumber = document.getElementById("rnd-num");
const text = document.getElementById("input-text");
let newArr = generateRandomArr(5);

console.log(newArr); // FOR DEBUG

printNumber(rndNumber, 5);

setTimeout(function(){
    rndNumber.style.display = "none";
    setTimeout(function(){
        for (let i = 0; i < size; i++){
            let numChooice = numIntegerPrompt();
            if (isInArray(numChooice, newArr)){
                point++;
            }
        }
        if (point === size){
            text.innerText = "Hai vinto"
        }else{
            text.innerText = "Hai perso"
        }
    },100);
}, 3000);

