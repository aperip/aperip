const clock = document.querySelector("h2#clock");

clock.innerHTML = "00:00"

function sayHello(){
    console.log("hello");


}

setInterval(sayHello, 5000);  //5000ms == 5s

const h = new Date().getHours();
const m = new Date().getMinutes();
const s = new Date().getSeconds();

function setTime(){
    //clock.innerHTML = h +" : "+ m +" : "+ s;
    const date = new Date();
    let hours = `${date.getHours()}`.padStart(2,"0");
    let minutes = `${date.getMinutes()}`.padStart(2,"0");
    let seconds = `${date.getSeconds()}`.padStart(2,"0");
    clock.innerHTML = hours+" : "+minutes+" : "+seconds;
}
setTime();
setInterval(setTime, 1000);


$(function(){
    setInterval(setTime, 1000);  //5000ms == 5s

});
