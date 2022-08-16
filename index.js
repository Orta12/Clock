let second = document.getElementById("seconds");
let miniute = document.getElementById("miniutes");
let hour = document.getElementById("hours");

let days = document.getElementById("days");
let monthes = document.getElementById("monthes");
let years = document.getElementById("years");

let miniutess = document.getElementById("miniutess");
let secondss = document.getElementById("secondss");
let miliseconds = document.getElementById("miliseconds");

var data;
var min = 0;
var sec = 0;
var mes = 0;
var count = 0;
var timer = false;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}


function clock() {

    var t = "AM";
    const time = new Date();
    let s = time.getSeconds();
    let m = time.getMinutes();
    let h = time.getHours();

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        t = "PM";
    }

    hour.textContent = h;
    miniute.textContent = ": " + m;
    second.textContent = ": " + s +  t;
    setTimeout(clock, 1000);

}

function calander() {
    const calander = new Date();
    let d = calander.getDate();
    let m = calander.getMonth();
    let y = calander.getFullYear();

    days.textContent = d + " " + "/";
    monthes.textContent = m + " " + "/";
    years.textContent = y;

}



clock();
calander();


function add() {

    data = window.prompt("Enter your plan !");
    if (data != '' && data != null) {

        var ul = document.getElementById("genrate");
        var box = document.getElementById("box");
        var li = document.createElement("li");
        li.textContent = data;
        
        box.appendChild(li);
        li.classList.add("list")
        
    }
    else {
        alert("Fuck off chutiyaaa");
    }

}

function del() {
    var list = document.querySelector(".list");
    list.remove();
}

function start() {
    timer = true;
    stopwatch();
}

function wait() {
    timer = false;
}

function revert() {
    min = 0;
    sec = 0;
    mes = 0;
    count = 0;
}

function stopwatch() {
    if (timer == true) {
        count = count + 1;

        if(count == 100){
            sec=sec+1;
            count = 0;
        }
        if(sec == 60){
            min=min+1;
            sec = 0;
        }

        miniutess.innerHTML = min + " :";
        secondss.innerHTML =  sec + " :";
        miliseconds.innerHTML = count;
        setTimeout("stopwatch()", 10);
    }
}


