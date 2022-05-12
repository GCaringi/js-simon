/*--------------------
   Global Variable
--------------------*/
let size = 0;



/*--------------------
  Logic Function
--------------------*/

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
let newArr = generateRandomArr(5);
console.log(newArr);

printNumber(rndNumber, 5);

setTimeout(function(){
    rndNumber.style.display = "none";
    console.log("Sono passati 3 secondi");
}, 3000);

