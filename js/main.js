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

function strToNumArr(str){
    str = str.split(" ");
    let newArray = [];
    for (let i = 0; i < str.length; i++){
        newArray.push(Number(str[i]));
    }
    return newArray;
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
const resultZone = document.getElementById("result");
const submit = document.getElementById("btn");
const form = document.getElementById("input-area");
let newArr = generateRandomArr(5);

console.log(newArr); // FOR DEBUG

printNumber(rndNumber, 5);

setTimeout(function(){
    rndNumber.style.display = "none";
    console.log("sono passati 2s");
    submit.addEventListener("click", 
        function(){
            let res = strToNumArr(document.getElementById("mychoice").value);
            for (let i = 0; i < res.length; i++){
                if (newArr.includes(res[i])){
                    point++;
                }
            }
            if (point === newArr.length){
                console.log("Hai vinto");
                form.style.display = "none";
                setTimeout(function(){
                    resultZone.style.display = "flex";
                }, 200)
                resultZone.innerText = "You win!";
            }else{
                console.log("Hai perso");
                form.style.display = "none";
                setTimeout(function(){
                    resultZone.style.display = "flex";
                }, 200)
                resultZone.innerText = "You lose!";
            }
            setTimeout(function(){
                console.log("Sto ricaricando");
                window.location.reload();
            },2000);
        }
    )
}, 2000);

