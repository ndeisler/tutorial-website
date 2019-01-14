// function mouseOver() {
//     document.getElementById("javascript").style.boxShadow = "5px 5px 5px 5px grey";
//     document.getElementById("javascript").style.background = "linear-gradient(45deg, lightgrey, darkgrey, rgb(184, 131, 131))";
//     document.getElementById("javascript").style.height = "400px";
//     document.getElementById("potato").style.height = "400px";
//     document.getElementById("potato").style.width = "400px";
// }



// function mouseOvers() {
//     document.getElementById("javascript2").style.boxShadow = "5px 5px 5px 5px grey";
//     document.getElementById("javascript2").style.background = "linear-gradient(45deg, lightgrey, darkgrey, rgb(184, 131, 131))";
//     document.getElementById("javascript2").style.height = "400px";
//     document.getElementById("potato1").style.height = "400px";
//     document.getElementById("potato1").style.width = "400px";
// }


let img = document.getElementById("potato");
let js = document.getElementById("javascript");

function onMouseOver() {
    img.classList.add("grow");
    js.classList.add("active");
}

function onMouseOut() {
    img.classList.remove("grow");
    js.classList.remove("active");
}


let img2 = document.getElementById("potato2");
let js2 = document.getElementById("javascript2");

function onMouseOver2() {
    img2.classList.add("grow");
    js2.classList.add("active2");
}
function onMouseOut2() {
    img2.classList.remove("grow");
    js2.classList.remove("active2");
}

let img3 = document.getElementById("potato3");
let js3 = document.getElementById("javascript3");

function onMouseOver3() {
    img3.classList.add("grow");
    js3.classList.add("active");
}
function onMouseOut3() {
    img3.classList.remove("grow");
    js3.classList.remove("active");
}


let img4 = document.getElementById("potato4");
let js4 = document.getElementById("javascript4");

function onMouseOver4() {
    img4.classList.add("grow");
    js4.classList.add("active2");
}
function onMouseOut4() {
    img4.classList.remove("grow");
    js4.classList.remove("active2");
}

let img5 = document.getElementById("potato5");
let js5 = document.getElementById("javascript5");

function onMouseOver5() {
    img5.classList.add("grow");
    js5.classList.add("active");
}
function onMouseOut5() {
    img5.classList.remove("grow");
    js5.classList.remove("active");
}
