let label = document.querySelectorAll(".indector-css");
let present = document.querySelector(".present-items");
const image_title = document.querySelector(".i-t-one");

const bodyhide = document.querySelector(".body-hide");
const header_icon = document.querySelector(".icon-hover");
const margin = document.querySelector(".genral-wrap");

const headersSlider = document.querySelector(".header-slider");
const prkhiddenbar = document.querySelector(".prk-hidden-bar");

const h_s_d = document.querySelectorAll(".h-s-d");
const H_S_D = Array.from(h_s_d);

const headerspan = document.querySelectorAll(".header-span");
const headerSpan = Array.from(headerspan);

const span = document.querySelectorAll(".header-s");
const span_s = Array.from(span);

const mhiddenbar = document.querySelector(".m-hidden-bar");
const mobile_btn = document.querySelector(".icon-m");
const mobile_s2 = document.querySelector(".m-f-c2");
const mobile_s = document.querySelector(".m-f-c");

const color = document.querySelectorAll(".back-js");
const colorarray = Array.from(color);

const spancolor = document.querySelectorAll(".back-jsspan");
const spanarray = Array.from(spancolor);

const dragtittle = document.querySelector(".drag-tittle")
const firstdrag = document.querySelector(".fistt-drag");

const link1 = document.querySelector(".link1-div");
const link2 = document.querySelector(".link2-div");

const foot = document.querySelector(".footer-layout");

let current = 0;
let maxscroll = 900;
let scrollamount = 100;

// varibales////

window.onload = function () {

    firstdrag.style.transform = "translatey(" + 0 + "px)";
    dragtittle.style.transform = "translatey(" + 0 + "px)";
    const myTimeout = setTimeout(myGreeting, 2000);
    const myTimeout2 = setTimeout(myGreeting2, 3000);

    // document.querySelector(".item100").classList.add("clip-active");
}

function myGreeting() {
    link1.style.display = "inline-block";
}
function myGreeting2() {
    link2.style.display = "inline-block";

}

// slider for the body////////
header_icon.addEventListener("click", parkshow);
function parkshow() {

    bodyhide.style.zIndex = "9999";
    prkhiddenbar
        .classList
        .add("park-hidden");

    margin
        .classList
        .add("bodytrans");
    headersSlider
        .classList
        .add("bodytrans");
    foot
        .classList
        .add("bodytrans");
}

function remove_park() {
    prkhiddenbar
        .classList
        .remove("park-hidden");
    margin
        .classList
        .remove("bodytrans");
    foot
        .classList
        .remove("bodytrans");

    headersSlider
        .classList
        .remove("bodytrans");
    bodyhide.style.zIndex = "-5";

    mhiddenbar
        .classList
        .remove("park-hidden");
    mobile_s2
        .classList
        .remove("mobilespan2");
    mobile_s
        .classList
        .remove("mobilespan");
}

function mobileshow() {
    bodyhide.style.zIndex = "999";
    mhiddenbar
        .classList
        .add("park-hidden");
    margin
        .classList
        .add("bodytrans");
    foot
        .classList
        .add("bodytrans");

    headersSlider
        .classList
        .add("bodytrans");
    mobile_s2
        .classList
        .add("mobilespan2");
    mobile_s
        .classList
        .add("mobilespan");
}

// slider for the body////////
window.onscroll = function () {
    if (window.scrollY >= 250) {
        headersSlider
            .classList
            .add("header-scroll");

        colorarray.forEach((item) => {
            item.style.color = "#476675";
        });

        spanarray.forEach((span) => {
            span
                .classList
                .add("color-s");
        });

        span_s.forEach((span) => {
            span
                .classList
                .add("color-s");
        });

    } else {

        headersSlider
            .classList
            .remove("header-scroll");

        colorarray.forEach((item) => {
            item.style.color = "#fff";
        });
        spanarray.forEach((span) => {
            span
                .classList
                .remove("color-s");
        });

        span_s.forEach((span) => {
            span
                .classList
                .remove("color-s");
        });
    }
}

// slider span and drag/////////////////////////

function spanhover(v) {
    span_s[v].style.opacity = "1";

    if (v == 0) {

        H_S_D.forEach((span) => {
            span.style.display = "block";

        });
        document
            .querySelector(".h-s-d-d")
            .style
            .transition = "all .7s";
        document
            .querySelector(".h-s-d-d")
            .style
            .height = document
            .querySelector(".h-s-d-d")
            .dataset
            .height;

        span_s[v].style.backgroundColor = "#476675";
    }
}

function spanunhover(v) {
    span_s[v].style.opacity = "0";

    if (v == 0) {

        H_S_D.forEach((span) => {
            span.style.display = "none";

        });

        document
            .querySelector(".h-s-d-d")
            .style
            .transition = "all 0s";
        document
            .querySelector(".h-s-d-d")
            .style
            .height = "0px";
        span_s[v].style.opacity = "0";
    }
}

// slider for the body////////

function bottomscrollf() {
    const el = document.getElementById("gallary-scroll");
    el.scrollIntoView({behavior: "smooth", block: "start"});
}

function set() {

    for (var i = 0; i < label.length; i++) {

        document
            .querySelectorAll(".indector-css")[i]
            .classList
            .remove("active");
    }
    // document.querySelector(".present-items").style.transform="translatex("+ -10 +
    // "%)";
}

// transform slider////////////

function pilot(n) {

    set();

    label[n - 1]
        .classList
        .add("active");

    if (n >= 2) {
        firstdrag.style.transform = "translatey(" + -500 + "px)";
        dragtittle.style.transform = "translatey(" + 4000 + "px)";
        link1.style.display = "none";
        link2.style.display = "none";
    }

    if (n == 1) {

        current = 0;

        present.style.marginLeft = current + "%";

        document
            .querySelectorAll(".indector-css")[0]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "1/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "1/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ابيض";
        firstdrag.style.transform = "translatey(" + 0 + "px)";
        dragtittle.style.transform = "translatey(" + 0 + "px)";
        setTimeout(myGreeting, 1000);
        setTimeout(myGreeting2, 1500);

    }

    if (n == 2) {
        current = -100;

        present.style.marginLeft = current + "%";

        document
            .querySelectorAll(".indector-css")[1]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "2/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "2/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:كافيه وبيج";

    }

    if (n == 3) {
        current = -200;
        present.style.marginLeft = current + "%";
        document
            .querySelectorAll(".fass")[0]
            .textContent = "3/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "3/10";
        image_title.textContent = "ضلفه :دبل المونيوم اللون:سيلفر وتركواز";

    }

    if (n == 4) {
        current = -300;
        present.style.marginLeft = current + "%";
        document
            .querySelectorAll(".fass")[0]
            .textContent = "4/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "4/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ابيض وردي";

    }

    if (n == 5) {
        current = -400;
        present.style.marginLeft = current + "%";
        document
            .querySelectorAll(".fass")[0]
            .textContent = "5/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "5/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ازرق ازورين ";

    }

    if (n == 6) {
        current = -500;
        present.style.marginLeft = current + "%";
        document
            .querySelectorAll(".fass")[0]
            .textContent = "6/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "6/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:احمر غامق";

    }

    if (n == 7) {
        current = -600;
        present.style.marginLeft = current + "%";
        document
            .querySelectorAll(".fass")[0]
            .textContent = "7/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "7/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:بينك";

    }

    if (n == 8) {
        current = -700;
        present.style.marginLeft = current + "%";
        document
            .querySelectorAll(".fass")[0]
            .textContent = "8/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "8/10";
        image_title.textContent = "ضلفه :دبل : المونيوم  اللون:ابيض و بنفسج غامق";
    }

    if (n == 9) {
        current = -800;
        present.style.marginLeft = current + "%";
        document
            .querySelectorAll(".fass")[0]
            .textContent = "9/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "9/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:اسود";
        firstdrag.style.transform = "translatey(" + 0 + "px)";
        dragtittle.style.transform = "translatey(" + 0 + "px)";
        setTimeout(myGreeting, 1000);
        setTimeout(myGreeting2, 1500);
    }

    if (n == 10) {
        current = -900;
        present.style.marginLeft = current + "%";
        document
            .querySelectorAll(".fass")[0]
            .textContent = "10/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "10/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:بيج و عسلي";

    }

}

// pilotforward////

let right_arrow = document.querySelector(".right-arrow-transform");

function pilotforward() {

    current = ((scrollamount - current) * -1);

    if (current < -maxscroll) {
        current = 0;
    }

    if (current <= -100) {
        firstdrag.style.transform = "translatey(" + -500 + "px)";
        dragtittle.style.transform = "translatey(" + 4000 + "px)";
        link1.style.display = "none";
        link2.style.display = "none";
    }

    if (current == 0) {
        set();
        document
            .querySelectorAll(".indector-css")[0]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "1/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "1/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ابيض";
        firstdrag.style.transform = "translatey(" + 0 + "px)";
        dragtittle.style.transform = "translatey(" + 0 + "px)";
        setTimeout(myGreeting, 1000);
        setTimeout(myGreeting2, 1500);

    }
    if (current == -100) {
        set();
        document
            .querySelectorAll(".indector-css")[1]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "2/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "2/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:كافيه وبيج";

    }

    if (current == -200) {
        set();
        document
            .querySelectorAll(".indector-css")[2]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "3/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "3/10";
        image_title.textContent = "ضلفه :دبل المونيوم اللون:سيلفر وتركواز";

    }
    if (current == -300) {
        set();
        document
            .querySelectorAll(".indector-css")[3]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "4/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "4/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ابيض وردي";

    }
    if (current == -400) {
        set();
        document
            .querySelectorAll(".indector-css")[4]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "5/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "5/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ازرق ازورين ";

    }

    if (current == -500) {
        set();
        document
            .querySelectorAll(".indector-css")[5]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "6/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "6/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:احمر غامق";

    }
    if (current == -600) {
        set();
        document
            .querySelectorAll(".indector-css")[6]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "7/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "7/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:بينك";

    }
    if (current == -700) {
        set();
        document
            .querySelectorAll(".indector-css")[7]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "8/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "8/10";
        image_title.textContent = "ضلفه :دبل : المونيوم  اللون:ابيض و بنفسج غامق";

    }
    if (current == -800) {
        set();
        document
            .querySelectorAll(".indector-css")[8]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "9/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "9/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:اسود";
        firstdrag.style.transform = "translatey(" + 0 + "px)";
        dragtittle.style.transform = "translatey(" + 0 + "px)";
        setTimeout(myGreeting, 1000);
        setTimeout(myGreeting2, 1500);

    }
    if (current == -900) {
        set();
        document
            .querySelectorAll(".indector-css")[9]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "10/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "10/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:بيج و عسلي";

    }
    present.style.marginLeft = current + "%";

}

const myintervaltow = setInterval(mytimertow, 9000);
function mytimertow() {

    pilotforward();
    right_arrow.checked = true;

}

/////pilotforward///// ///pilotbackward///

let left_arrow = document.querySelector(".left-arrow-transform");

function pilotbackward(v) {

    current = ((scrollamount + current) * v);
    if (current > 0) {
        current = -maxscroll;
    }

    if (current >= -100) {
        firstdrag.style.transform = "translatey(" + -500 + "px)";
        dragtittle.style.transform = "translatey(" + 4000 + "px)";
        link1.style.display = "none";
        link2.style.display = "none";
    }

    if (current == 0) {
        set();
        document
            .querySelectorAll(".indector-css")[0]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "1/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "1/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ابيض";
        firstdrag.style.transform = "translatey(" + 0 + "px)";
        dragtittle.style.transform = "translatey(" + 0 + "px)";
        setTimeout(myGreeting, 1000);
        setTimeout(myGreeting2, 1500);

    }
    if (current == -100) {
        set();
        document
            .querySelectorAll(".indector-css")[1]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "2/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "2/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:كافيه وبيج";

    }
    if (current == -200) {
        set();
        document
            .querySelectorAll(".indector-css")[2]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "3/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "3/10";
        image_title.textContent = "ضلفه :دبل المونيوم اللون:سيلفر وتركواز";

    }
    if (current == -300) {
        set();
        document
            .querySelectorAll(".indector-css")[3]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "4/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "4/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ابيض وردي";

    }
    if (current == -400) {
        set();
        document
            .querySelectorAll(".indector-css")[4]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "5/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "5/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:ازرق ازورين ";
    }

    if (current == -500) {
        set();
        document
            .querySelectorAll(".indector-css")[5]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "6/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "6/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:احمر غامق";

    }
    if (current == -600) {
        set();
        document
            .querySelectorAll(".indector-css")[6]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "7/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "7/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:بينك";

    }
    if (current == -700) {
        set();
        document
            .querySelectorAll(".indector-css")[7]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "8/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "8/10";
        image_title.textContent = "ضلفه :دبل : المونيوم  اللون:ابيض و بنفسج غامق";

    }
    if (current == -800) {
        set();
        document
            .querySelectorAll(".indector-css")[8]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "9/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "9/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:اسود";
        firstdrag.style.transform = "translatey(" + 0 + "px)";
        dragtittle.style.transform = "translatey(" + 0 + "px)";
        setTimeout(myGreeting, 1000);
        setTimeout(myGreeting2, 1500);

    }
    if (current == -900) {
        set();
        document
            .querySelectorAll(".indector-css")[9]
            .classList
            .add("active");
        document
            .querySelectorAll(".fass")[0]
            .textContent = "10/10";
        document
            .querySelectorAll(".fass")[1]
            .textContent = "10/10";
        image_title.textContent = "ضلفه :اكلريليك  اللون:بيج و عسلي";

    }

    present.style.marginLeft = current + "%";

}
// pilotbackward/// transform slider//////////////////////////////////// arrow
// hover////
document
    .querySelector(".left-arrow-transform")
    .addEventListener("mouseover", function () {
        document
            .querySelector(".fass")
            .style
            .opacity = "1";
    });
document
    .querySelector(".left-arrow-transform")
    .addEventListener("mouseout", function () {
        document
            .querySelector(".fass")
            .style
            .opacity = "0";
    });

document
    .querySelector(".right-arrow-transform")
    .addEventListener("mouseover", function () {
        document
            .querySelectorAll(".fass")[1]
            .style
            .opacity = "1";
    });
document
    .querySelector(".right-arrow-transform")
    .addEventListener("mouseout", function () {
        document
            .querySelectorAll(".fass")[1]
            .style
            .opacity = "0";
    });
// arrow hover//// ////////////////// light box//////////////
// window.addEventListener("scroll" , (event)=> {   var scroll = this.scrollY;
// })

function call(n) {

    document.body.style.overflow = "hidden";

    let slidingHold = document.createElement("div");
    slidingHold
        .classList
        .add("sliding-section-hold");

    slidingHold.addEventListener("click", e => {

         if (e.target !== e.currentTarget) return;
             
            closeElement();
    })

    let newElment = document.createElement("div");
    newElment
        .classList
        .add("backsliding");

    let closeelment = document.createElement("div");
    closeelment
        .classList
        .add("closse");

    let secondElment = document.createElement("div");
    secondElment
        .classList
        .add("sliding-section");
    slidingHold.appendChild(closeelment);
    slidingHold.appendChild(secondElment);

    let mainDiv = document.querySelector("main");

    mainDiv.insertBefore(slidingHold, mainDiv.childNodes[0]);
    mainDiv.insertBefore(newElment, mainDiv.childNodes[0]);

    document.addEventListener("keydown", move);

    // adress div and number

    let pnumber = document.createElement("div");
    pnumber
        .classList
        .add("image-n");
    slidingHold.insertBefore(pnumber, slidingHold.childNodes[0]);

    let node = document.createTextNode(n + 1 + " off 66");
    pnumber.appendChild(node);

    let clear = document.createElement("div");
    clear
        .classList
        .add("adress-image");
    slidingHold.insertBefore(clear, slidingHold.childNodes[0]);

    let frame = document.querySelectorAll(".picone")[n];
    let h1 = frame
        .querySelector(".adress-image")
        .textContent;
    let text = document.createTextNode(h1);
    clear.appendChild(text);

    // adress div and number scroll amount//
    let scrollBox = document.querySelector(".sliding-section-hold");
    scrollBox.style.top = scrollY + "px";
    //scroll amount//

    let leftArrow = document.createElement("div");
    leftArrow
        .classList
        .add("left-arrow");
    leftArrow.id = "left-arrow";
    secondElment.appendChild(leftArrow);

    let leftArrow_sign = document.createElement("i");
    leftArrow_sign
        .classList
        .add("fas", "fa-caret-left");
    leftArrow.appendChild(leftArrow_sign);

    let rightArrow = document.createElement("div");
    rightArrow
        .classList
        .add("right-arrow");
    rightArrow.id = "right-arrow";
    secondElment.appendChild(rightArrow);

    let rightArrow_sign = document.createElement("i");
    rightArrow_sign
        .classList
        .add("fas", "fa-caret-right");
    rightArrow.appendChild(rightArrow_sign);

    let btn = document.createElement("button");
    btn
        .classList
        .add("slider-close");
    slidingHold.appendChild(btn);

    let btn_icon = document.createElement("div");
    btn_icon
        .classList
        .add("slider-close-icon");
    btn.appendChild(btn_icon);
    btn_icon.onclick = function () {
        closeElement()
    };

    let btn_span = document.createElement("span");
    btn_span
        .classList
        .add("slider-close-icon-before");
    btn_icon.appendChild(btn_span);

    let btn_spann = document.createElement("span");
    btn_spann
        .classList
        .add("slider-close-icon-after");
    btn_icon.appendChild(btn_spann);

    let slider_content = document.createElement("div");
    slider_content
        .classList
        .add("slidingimag");
    secondElment.appendChild(slider_content);

    // image
    let h = window.innerHeight;
    let images = document.createElement("img");
    images
        .classList
        .add("sliderimage");
    slider_content.appendChild(images);
    images.src = "image" + [n] + ".jpg";
    images.style.maxHeight = h - 100 + "px";

    images.onclick = () => {
        if (n >= 65) {
            n = 0;
            console.log(n);
            secondElment.removeChild(slider_content);
            pnumber.removeChild(node);
            secondElment.appendChild(slider_content);
            n--;

            node = document.createTextNode(n + 1 + " off 66");
            pnumber.appendChild(node);
            images.src = "image" + [n] + ".jpg";

        }

        secondElment.removeChild(slider_content);
        pnumber.removeChild(node);
        clear.removeChild(text);

        n++;

        secondElment.appendChild(slider_content);
        node = document.createTextNode(n + 1 + " off 66");
        pnumber.appendChild(node);

        // slidingHold.insertBefore(clear,slidingHold.childNodes[0]);

        frame = document.querySelectorAll(".picone")[n];
        h1 = frame
            .querySelector(".adress-image")
            .textContent;
        text = document.createTextNode(h1);
        clear.appendChild(text);

        images.src = "image" + [n] + ".jpg";

        console.log(n);

    }

    // image prev
    leftArrow.onclick = function () {
        prev()
    };

    function prev() {

        if (n <= 0) {
            n = 65;
            console.log(n);
            secondElment.removeChild(slider_content);
            pnumber.removeChild(node);
            secondElment.appendChild(slider_content);
            n++;

            node = document.createTextNode(n + 1 + " off 66");
            pnumber.appendChild(node);
            images.src = "image" + [n] + ".jpg";

        }

        secondElment.removeChild(slider_content);
        pnumber.removeChild(node);
        clear.removeChild(text);

        n--;

        secondElment.appendChild(slider_content);
        node = document.createTextNode(n + 1 + " off 66");
        pnumber.appendChild(node);

        frame = document.querySelectorAll(".picone")[n];
        h1 = frame
            .querySelector(".adress-image")
            .textContent;
        text = document.createTextNode(h1);
        clear.appendChild(text);

        images.src = "image" + [n] + ".jpg";

    }
    //prev forward
    rightArrow.onclick = function () {
        forward()
    };
    function forward() {

        if (n >= 65) {
            n = 0;
            console.log(n);
            secondElment.removeChild(slider_content);
            pnumber.removeChild(node);
            secondElment.appendChild(slider_content);
            n--;

            node = document.createTextNode(n + 1 + " off 66");
            pnumber.appendChild(node);
            images.src = "image" + [n] + ".jpg";

        }

        secondElment.removeChild(slider_content);
        pnumber.removeChild(node);
        clear.removeChild(text);

        n++;

        secondElment.appendChild(slider_content);
        node = document.createTextNode(n + 1 + " off 66");
        pnumber.appendChild(node);

        frame = document.querySelectorAll(".picone")[n];
        h1 = frame
            .querySelector(".adress-image")
            .textContent;
        text = document.createTextNode(h1);
        clear.appendChild(text);

        images.src = "image" + [n] + ".jpg";

    }
    //forward

    function move(event) {
        if (event.key == "ArrowRight") {
            forward();
        }

        if (event.key == "ArrowLeft") {
            prev();
        }

        if (event.key == "Escape") {
            closeElement();
        }
    }

}

function closeElement() {

    let mainDiv = document.querySelector("main");
    mainDiv.removeChild(mainDiv.childNodes[0]);
    mainDiv.removeChild(mainDiv.childNodes[0]);
    document.body.style.overflow = "visible";
}
