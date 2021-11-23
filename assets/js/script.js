const outputScreen = document.querySelector("#outputScreen");
const decreaseButton = document.querySelector("#decreaseButton");
const increaseButton = document.querySelector("#increaseButton");
const resetButton = document.querySelector("#resetButton");

//-----------------------------INCREMENT AND DECREMENT-------------------------

let number = 0;
let timer;

function timeoutClear() {
   clearTimeout(timer);
 }

 //decrease button (function)

decreaseButton.addEventListener('pointerdown', decreaseOperation);
decreaseButton.addEventListener('pointerup', timeoutClear);
decreaseButton.addEventListener('pointerleave', timeoutClear);
function decreaseOperation(){
 if(number > -99){
      outputScreen.innerHTML = --number;
      timer = setTimeout(decreaseOperation,150); 
      numberStyle();
      clearInterval();//stop arrow
   }
}

//increase button (function)

increaseButton.addEventListener('pointerdown', increaseOperation);
increaseButton.addEventListener('pointerup', timeoutClear);
increaseButton.addEventListener('pointerleave', timeoutClear);
function increaseOperation(){
   if(number < 99){
        outputScreen.innerHTML = ++number;
        timer = setTimeout(increaseOperation,150); 
        numberStyle();
        clearInterval();//stop arrow
   }
}

// reset screen to 0

resetButton.addEventListener('click',()=>{
   number = 0
   outputScreen.innerHTML = 0;
   numberStyle();
   clearInterval();//to stop arrow
})


//-----------------------------------------EXTRA STYLE--------------------------------

//Number style and animation

function numberStyle(){ 
   if(number > 0 || number < 0){
      outputScreen.style.animation = "pulse 350ms ease-in-out";
   }else{
      outputScreen.style.animation = "";

   }
   if(number === 99 || number === -99){
     outputScreen.style.color= "red";
   }else{
     outputScreen.style.color= "";
   }
}

//arrow anmation
let interval;

function moveArrow() {
  if (!interval) {
    interval = setInterval(flashText, 500);
  }
}

function flashText() {
const arrow1 = document.querySelector('#arrow1');
  if (arrow1.className === "arrow-move-1") {
   arrow1.className = "arrow-move-2";
  } else {
    arrow1.className = "arrow-move-1";
  }
}
moveArrow();

function clearInterval(){
   arrow1.style.fontSize="7vh";
}

