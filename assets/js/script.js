// ---------------------------------------------CREATE ELEMENT-----------

//decrease button
const minBtn = document.createElement('buttom')
minBtn.classList.add('minus-button')
minBtn.setAttribute('id','decreaseButton')
document.getElementById("resetButton").before(minBtn)

//increase button
const plusBtn = document.createElement('buttom')
plusBtn.innerText = '✚'
plusBtn.classList.add('plus-button')
plusBtn.setAttribute('id','increaseButton')
plusBtn.setAttribute('onmousedown','return false')
document.getElementById("resetButton").before(plusBtn)

//output screen

const output = document.createElement('div')
output.innerText = 0
output.classList.add('output-screen')
output.setAttribute('id','outputScreen')
document.getElementById("gameBoyCont").prepend(output)



//----------------------------------------INCREMENT AND DECREMENT-------------------------
let number = 0;
let timer;

function timeoutClear() {
   clearTimeout(timer);   //function to keep buttons pressed
 }

 //decrease button (function)

minBtn.addEventListener('pointerdown', decreaseOperation);
minBtn.addEventListener('pointerup', timeoutClear);
minBtn.addEventListener('pointerleave', timeoutClear);
function decreaseOperation(){
 if(number > -99){
      output.innerHTML = --number;
      timer = setTimeout(decreaseOperation,150); 
      numberStyle();
      clearArrowInterval();//stop arrow
   }
}

//increase button (function)

plusBtn.addEventListener('pointerdown', increaseOperation);
plusBtn.addEventListener('pointerup', timeoutClear);
plusBtn.addEventListener('pointerleave', timeoutClear);
function increaseOperation(){
   if(number < 99){
        output.innerHTML = ++number;
        timer = setTimeout(increaseOperation,150); 
        numberStyle();
        clearArrowInterval();//stop arrow
   }
}

// reset screen to 0
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click',()=>{
   number = 0
   outputScreen.innerHTML = 0;
   numberStyle();
   clearArrowInterval();//to stop arrow
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
    interval = setInterval(changeClass, 500);
  }
}

function changeClass() {
const arrow1 = document.querySelector('#arrow1');
  if (arrow1.className === "arrow-move-1") {
   arrow1.className = "arrow-move-2";
  } else {
    arrow1.className = "arrow-move-1";
  }
}
moveArrow();

function clearArrowInterval(){
   arrow1.style.fontSize="7vh";
}

