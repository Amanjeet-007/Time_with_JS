
// const url = 'https://time-api4.p.rapidapi.com/api/Conversion/Translate';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'x-rapidapi-key': 'ffe43b2e39mshbdb924fa45bc638p1e7681jsn93e0cb2939fa',
// 		'x-rapidapi-host': 'time-api4.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	},
// 	body: {
// 		dateTime: '2021-03-14 17:45:00',
// 		languageCode: 'de'
// 	}
// };
// const data = async ()=>{


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// data()

const num = document.querySelector("#num");
console.log(num)
num.addEventListener("mouseup",(a)=>{
    console.log(a);
})



















//display elements
const displayMinute = document.querySelector(".min");
const displaySecond = document.querySelector(".sec");
const displayMini = document.querySelector(".mini");

//buttons here:
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const pinBtn = document.getElementById("pin");
const resetBtn = document.getElementById("reset");
//pinned
let pinner= document.querySelector(".pinned");
// default property of buttons
pinBtn.style.display = "none";
pauseBtn.style.display = "none";
resetBtn.style.display = "none";

// time initializing
let minte = "00";
let second = "00";
let miniSecond = "00";

//initinal time redering on display
displayMini.innerHTML = miniSecond;
displayMinute.innerHTML = minte;
displaySecond.innerHTML = second;

//pin initializing in global to to easy access
let pineed;

// making time string to number
second = 0;
minte = 0;
miniSecond = 0;

//defining start function in global scope
let start;

//reset function
function reset() {
    //main function
    clearInterval(start);

    // reset all display 
    miniSecond = 0;
    second = 0;
    minte = 0;
    displayMini.innerHTML = miniSecond;
    displayMinute.innerHTML = minte;
    displaySecond.innerHTML = second;

    // display changes for buttons
    pinBtn.style.display = "none";
    pauseBtn.style.display = "none";
    resetBtn.style.display = "none";
    startBtn.style.display="flex";

    //removing pinned iteams
    pinner.innerHTML ="";
}

//start function wrapped in chal function to call it in onclick 
function chal() {
    start = setInterval(() => {
        miniSecond = Number(miniSecond)
        miniSecond += 1
        if (miniSecond == 100) {
            second += 1
            miniSecond = 0
            if (second == 60) {
                minte += 1
                second = 0
            }
        }
        //display changes according to the function
        displayMini.innerHTML = miniSecond;
        displayMinute.innerHTML = minte;
        displaySecond.innerHTML = second;




    }, 10)
    //display changes for buttons when calling start function
    startBtn.style.display = "none";
    pinBtn.style.display = "unset";
    pauseBtn.style.display = "unset";

}

// function for pause
let pause = () => {
    //main function
    clearInterval(start);

    //display chages for buttons
    pauseBtn.style.display = "none";
    startBtn.style.display = "unset";
    resetBtn.style.display = "unset";



}

// function for pin 
function pin() {
    pineed = `${displayMinute.innerHTML}:${displaySecond.innerHTML}:${displayMini.innerHTML} <br>`;
    pinner.innerHTML += pineed ;

}
// --------------------------------------------







