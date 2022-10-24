const loadLogo = document.querySelector(".load-logo");
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

const clipitem = document.querySelectorAll(".items-clip");
const clip_indc = document.querySelectorAll(".indector-clip");

const dragtittleclip = document.querySelector(".drag-tittle-clip");
const firstdragclip = document.querySelector(".fistt-drag-clip");

const opacityDiv = document.querySelector(".opacity-div");

const link1clip = document.querySelector(".link1-clip");
const link2clip = document.querySelector(".link2-clip");

const testmSlider = document.querySelectorAll(".testmon-slider");

const rightArrow = document.querySelector(".right-arrow-clip");
const leftArrow = document.querySelector(".left-arrow-clip");
const fassClip = document.querySelectorAll(".fass-clip");

const foot = document.querySelector(".footer-layout");
const assurance = document.querySelector(".work-wrap");
const contact = document.querySelector(".cont-form");

const royal_n = document.querySelector(".n-royal");
const years = document.querySelectorAll(".count-p");

let wid = document.querySelector(".testmon-slide").clientWidth;

let js_wid = (document.querySelector(".js-sliding").style.width = wid * 8 + "px");

t = 0;
current = 0;
let windowWidth = window.innerWidth;

for (let i = 0; i < testmSlider.length; i++) {
  testmSlider[i].style.width = wid + "px";
}

// starting///////////////
window.addEventListener("resize", go);

window.onload = function () {
  firstdragclip.style.transform = "translatey(" + 0 + "px)";
  dragtittleclip.style.transform = "translatey(" + 0 + "px)";
  const myTimeoutclip = setTimeout(myGreetingclip, 2000);
  const myTimeout2clip = setTimeout(myGreetingclip2, 3000);
  loadLogo.style.display = "none";
};

function myGreetingclip() {
  link1clip.style.display = "inline-block";
}
function myGreetingclip2() {
  link2clip.style.display = "inline-block";
}

// arrow hover////
leftArrow.addEventListener("mouseover", function () {
  function mediaquiry(m) {
    if (m.matches) {
      fassClip[0].style.opacity = "0";
    } else {
      fassClip[0].style.opacity = "1";
    }
  }
  const mediadata = window.matchMedia("(max-width: 825px)");
  mediaquiry(mediadata);
  mediadata.addListener(mediaquiry);
});

leftArrow.addEventListener("mouseout", function () {
  fassClip[0].style.opacity = "0";
});

rightArrow.addEventListener("mouseover", function () {
  function mediaquiry(m) {
    if (m.matches) {
      fassClip[1].style.opacity = "0";
    } else {
      fassClip[1].style.opacity = "1";
    }
  }
  const mediadata = window.matchMedia("(max-width: 825px)");
  mediaquiry(mediadata);
  mediadata.addListener(mediaquiry);
});

rightArrow.addEventListener("mouseout", function () {
  fassClip[1].style.opacity = "0";
});

// arrow hover//// slider for the body////////

header_icon.addEventListener("click", parkshow);

function parkshow() {
  bodyhide.style.zIndex = "9999";
  prkhiddenbar.classList.add("park-hidden");

  margin.classList.add("bodytrans");
  headersSlider.classList.add("bodytrans");
  foot.classList.add("bodytrans");
}

function remove_park() {
  prkhiddenbar.classList.remove("park-hidden");
  margin.classList.remove("bodytrans");
  foot.classList.remove("bodytrans");

  headersSlider.classList.remove("bodytrans");
  bodyhide.style.zIndex = "-5";

  mhiddenbar.classList.remove("park-hidden");
  mobile_s2.classList.remove("mobilespan2");
  mobile_s.classList.remove("mobilespan");
}

function mobileshow() {
  bodyhide.style.zIndex = "999";
  mhiddenbar.classList.add("park-hidden");
  margin.classList.add("bodytrans");

  headersSlider.classList.add("bodytrans");
  mobile_s2.classList.add("mobilespan2");
  mobile_s.classList.add("mobilespan");

  foot.classList.add("bodytrans");
}

// slider for the body////////

window.onscroll = function () {
  if (window.scrollY >= 250) {
    headersSlider.classList.add("header-scroll");

    colorarray.forEach((item) => {
      item.style.color = "#476675";
    });

    spanarray.forEach((span) => {
      span.classList.add("color-s");
    });

    span_s.forEach((span) => {
      span.classList.add("color-s");
    });
  } else {
    headersSlider.classList.remove("header-scroll");

    colorarray.forEach((item) => {
      item.style.color = "#fff";
    });
    spanarray.forEach((span) => {
      span.classList.remove("color-s");
    });

    span_s.forEach((span) => {
      span.classList.remove("color-s");
    });
  }

  back_position();
  present_position();

  // assuranse itemsection opacity ////

  if (window.scrollY >= assurance.offsetTop - 100) {
    const assurStart = document.querySelectorAll(".royal_n_op");
    for (let i = 0; i < assurStart.length; i++) {
      assurStart[i].classList.add("opacityn");
    }
  }

  const combinationoff = document.querySelector(".combination");
  if (window.scrollY >= combinationoff.offsetTop - 450) {
    const combinationDiv = document.querySelectorAll(".c-opacity");
    for (let i = 0; i < combinationDiv.length; i++) {
      combinationDiv[i].classList.add("opacitys");
    }
  }

  const solutionoff = document.querySelector(".solution");
  if (window.scrollY >= solutionoff.offsetTop - 500) {
    const solutionDiv = document.querySelectorAll(".sol-opacity");
    for (let i = 0; i < solutionDiv.length; i++) {
      solutionDiv[i].classList.add("opacitys");
    }
  }

  const warrantoff = document.querySelector(".warrant");
  if (window.scrollY >= warrantoff.offsetTop - 550) {
    const warrantDiv = document.querySelectorAll(".war-opacity");
    for (let i = 0; i < warrantDiv.length; i++) {
      warrantDiv[i].classList.add("opacitys");
    }
  }
  const standeroff = document.querySelector(".standerd");
  if (window.scrollY >= standeroff.offsetTop - 600) {
    const standerDiv = document.querySelectorAll(".sta-opacity");
    for (let i = 0; i < standerDiv.length; i++) {
      standerDiv[i].classList.add("opacitys");
    }
  }

  const degtilDesignoff = document.querySelector(".degtil-design");
  if (window.scrollY >= degtilDesignoff.offsetTop - 650) {
    const designDiv = document.querySelectorAll(".des-opacity");
    for (let i = 0; i < designDiv.length; i++) {
      designDiv[i].classList.add("opacitys");
    }
  }

  const deliveryoff = document.querySelector(".delivery");
  if (window.scrollY >= deliveryoff.offsetTop - 700) {
    const deliveryDiv = document.querySelectorAll(".del-opacity");
    for (let i = 0; i < deliveryDiv.length; i++) {
      deliveryDiv[i].classList.add("opacitys");
    }
  }

  // assuranse itemsection opacity ////

  // numbers section opacity ////

  const byNumoff = document.querySelector(".n-royal");
  if (window.scrollY >= byNumoff.offsetTop - 500) {
    const byNumDiv = document.querySelectorAll(".royal_num_op");
    for (let i = 0; i < byNumDiv.length; i++) {
      byNumDiv[i].classList.add("opacitys");
    }
  }
  // numbers section opacity ////

  //  numbers count//////

  if (window.scrollY >= byNumoff.offsetTop - 400) {
    years.forEach((item) => {
      function update() {
        let end = +item.getAttribute("data-numbers");
        let count = +item.innerText;

        if (count < end) {
          item.innerText++;
          setTimeout(update, 1000);
        } else {
          item.innerText = end;
        }
      }
      update();
    });

    //  numbers count//////

    function update2() {
      let end2 = +document.querySelector(".count-pp").getAttribute("data-number");
      let count2 = +document.querySelector(".count-pp").innerText;

      if (count2 < end2) {
        document.querySelector(".count-pp").innerText++;

        setTimeout(update2, 40);
      } else {
        document.querySelector(".count-pp").innerText = end2;
      }
    }

    update2();
  }
  //  numbers count//////

  // we care section opc//////////

  const rCare = document.querySelector(".r-care-dad");
  if (window.scrollY >= rCare.offsetTop - 470) {
    const rCareDiv = document.querySelectorAll(".royal_care_op");
    for (let i = 0; i < rCareDiv.length; i++) {
      rCareDiv[i].classList.add("opacitys");
    }
  }

  const contDad = document.querySelector(".cont-r-dad");
  if (window.scrollY >= contDad.offsetTop - 470) {
    const contactDiv = document.querySelectorAll(".royal_contact_op");
    for (let i = 0; i < contactDiv.length; i++) {
      contactDiv[i].classList.add("opacitys");
    }
  }
};
// input label////////////

let input1 = document.querySelectorAll(".inp-n");
let label = document.querySelector(".labe-n");
let label2 = document.querySelector(".labe-e");
let area = document.querySelector(".area-text");
let label3 = document.querySelectorAll(".labe-n");
let input = document.querySelectorAll(".inp-n");

function focus1() {
  label.classList.add("mystyle");
  input1[0].classList.add("fosusstyle");
}

function focus2() {
  label2.classList.add("mystyle");
  input1[1].classList.add("fosusstyle");
}

function focus3() {
  area.classList.add("fosusstyle");
}

function losefocus() {
  for (let i = 0; i < input.length; i++) {
    let i_amount = input[i].value.length;
    let areaamount = area.value.length;

    if (i_amount > 0) {
      label3[i].classList.add("mystyle");
      input1[i].classList.add("fosusstyle");
    }

    if (areaamount > 0) return area.classList.add("fosusstyle");
    else {
      label3[i].classList.remove("mystyle");
      input1[i].classList.remove("fosusstyle");
      area.classList.remove("fosusstyle");
    }
  }
}

// input label////////////

// slider span and drag/////////////////////////

function spanhover(v) {
  span_s[v].style.opacity = "1";

  if (v == 0) {
    H_S_D.forEach((span) => {
      span.style.display = "block";
    });
    document.querySelector(".h-s-d-d").style.transition = "all .7s";
    document.querySelector(".h-s-d-d").style.height = document.querySelector(".h-s-d-d").dataset.height;

    span_s[v].style.backgroundColor = "#476675";
  }
}

function spanunhover(v) {
  span_s[v].style.opacity = "0";

  if (v == 0) {
    H_S_D.forEach((span) => {
      span.style.display = "none";
    });

    document.querySelector(".h-s-d-d").style.transition = "all 0s";
    document.querySelector(".h-s-d-d").style.height = "0px";
    span_s[v].style.opacity = "0";
  }
}

// slider span and drag/////////////////////////

function bottomscroll() {
  window.scrollTo(0, assurance.offsetTop + 400);
}
function bottomscroll2() {
  window.scrollTo(0, contact.offsetTop - 300);
}

// function pilot indctor clip/////////

const itemClip = document.querySelectorAll(".items-clip");

function present_position() {
  let pres = window.scrollY / 2.5;

  if (pres >= 400) {
    pres = 400;
  }
  for (let i = 0; i < itemClip.length; i++) {
    itemClip[i].style.bottom = -pres + "px";
  }
}
//   $(".items-clip").css("bottom", -pres);

function setclip() {
  for (var i = 0; i < clipitem.length; i++) {
    clipitem[i].classList.remove("clip-active");
  }
}

function setindc() {
  for (var i = 0; i < clipitem.length; i++) {
    clip_indc[i].classList.remove("active-clip");
  }
}

//  indector pilot clip//////////

function pilott(c) {
  setclip();
  clipitem[c - 1].classList.add("clip-active");

  setindc();
  clip_indc[c - 1].classList.add("active-clip");

  if (c >= 2) {
    firstdragclip.style.transform = "translatey(" + -500 + "px)";
    dragtittleclip.style.transform = "translatey(" + 4000 + "px)";
    opacityDiv.style.display = "none";
    link1clip.style.display = "none";
    link2clip.style.display = "none";
  }

  if (c == 1) {
    document.querySelectorAll(".fass-clip")[0].textContent = "1/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "1/7";
    firstdragclip.style.transform = "translatey(" + 0 + "px)";
    dragtittleclip.style.transform = "translatey(" + 0 + "px)";
    opacityDiv.style.display = "block";
    setTimeout(myGreetingclip, 1000);
    setTimeout(myGreetingclip2, 1300);
    t = 0;
  }

  if (c == 2) {
    document.querySelectorAll(".fass-clip")[0].textContent = "2/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "2/7";
    t = 1;
  }

  if (c == 3) {
    document.querySelectorAll(".fass-clip")[0].textContent = "3/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "3/7";
    t = 2;
  }

  if (c == 4) {
    document.querySelectorAll(".fass-clip")[0].textContent = "4/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "4/7";
    t = 3;
  }

  if (c == 5) {
    document.querySelectorAll(".fass-clip")[0].textContent = "5/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "5/7";
    t = 4;
  }

  if (c == 6) {
    document.querySelectorAll(".fass-clip")[0].textContent = "6/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "6/7";
    firstdragclip.style.transform = "translatey(" + 0 + "px)";
    dragtittleclip.style.transform = "translatey(" + 0 + "px)";
    opacityDiv.style.display = "block";
    setTimeout(myGreetingclip, 1000);
    setTimeout(myGreetingclip2, 1300);
    t = 5;
  }

  if (c == 7) {
    document.querySelectorAll(".fass-clip")[0].textContent = "7/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "7/7";
    t = 6;
  }
}

//  indector pilot clip//////////

const myintervalthree = setInterval(mytimerthree, 12000);
function mytimerthree() {
  pilotforwardclip();
}

// function pilot forward clip////////////

function pilotforwardclip() {
  if (t >= 6) {
    t = -1;
  }

  setclip();
  t++;
  clipitem[t].classList.add("clip-active");

  if (t >= 1) {
    firstdragclip.style.transform = "translatey(" + -500 + "px)";
    dragtittleclip.style.transform = "translatey(" + 12000 + "px)";
    opacityDiv.style.display = "none";
    link1clip.style.display = "none";
    link2clip.style.display = "none";
  }

  if (t == 0) {
    document.querySelectorAll(".fass-clip")[0].textContent = "1/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "1/7";
    setindc();
    clip_indc[0].classList.add("active-clip");
    firstdragclip.style.transform = "translatey(" + 0 + "px)";
    dragtittleclip.style.transform = "translatey(" + 0 + "px)";
    opacityDiv.style.display = "block";
    setTimeout(myGreetingclip, 1000);
    setTimeout(myGreetingclip2, 1300);
  }

  if (t == 1) {
    document.querySelectorAll(".fass-clip")[0].textContent = "2/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "2/7";
    setindc();
    clip_indc[1].classList.add("active-clip");
  }

  if (t == 2) {
    document.querySelectorAll(".fass-clip")[0].textContent = "3/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "3/7";
    setindc();
    clip_indc[2].classList.add("active-clip");
  }

  if (t == 3) {
    document.querySelectorAll(".fass-clip")[0].textContent = "4/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "4/7";
    setindc();
    clip_indc[3].classList.add("active-clip");
  }

  if (t == 4) {
    document.querySelectorAll(".fass-clip")[0].textContent = "5/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "5/7";
    setindc();
    clip_indc[4].classList.add("active-clip");
  }

  if (t == 5) {
    document.querySelectorAll(".fass-clip")[0].textContent = "6/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "6/7";
    setindc();
    clip_indc[5].classList.add("active-clip");
    firstdragclip.style.transform = "translatey(" + 0 + "px)";
    dragtittleclip.style.transform = "translatey(" + 0 + "px)";
    opacityDiv.style.display = "block";
    setTimeout(myGreetingclip, 1000);
    setTimeout(myGreetingclip2, 1300);
  }

  if (t == 6) {
    document.querySelectorAll(".fass-clip")[0].textContent = "7/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "7/7";
    setindc();
    clip_indc[6].classList.add("active-clip");
  }
}

// function pilot forward clip//////////// function pilot backword
// clip////////////
function pilotbackclip() {
  if (t <= 0) {
    t = 7;
  }

  setclip();
  t--;
  clipitem[t].classList.add("clip-active");

  if (t >= 1) {
    firstdragclip.style.transform = "translatey(" + -500 + "px)";
    dragtittleclip.style.transform = "translatey(" + 12000 + "px)";
    opacityDiv.style.display = "none";
    link1clip.style.display = "none";
    link2clip.style.display = "none";
  }

  if (t == 0) {
    document.querySelectorAll(".fass-clip")[0].textContent = "1/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "1/7";
    setindc();
    clip_indc[0].classList.add("active-clip");
    firstdragclip.style.transform = "translatey(" + 0 + "px)";
    dragtittleclip.style.transform = "translatey(" + 0 + "px)";
    opacityDiv.style.display = "block";
    setTimeout(myGreetingclip, 1000);
    setTimeout(myGreetingclip2, 1500);
  }

  if (t == 1) {
    document.querySelectorAll(".fass-clip")[0].textContent = "2/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "2/7";
    setindc();
    clip_indc[1].classList.add("active-clip");
  }

  if (t == 2) {
    document.querySelectorAll(".fass-clip")[0].textContent = "3/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "3/7";
    setindc();
    clip_indc[2].classList.add("active-clip");
  }

  if (t == 3) {
    document.querySelectorAll(".fass-clip")[0].textContent = "4/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "4/7";
    setindc();
    clip_indc[3].classList.add("active-clip");
  }

  if (t == 4) {
    document.querySelectorAll(".fass-clip")[0].textContent = "5/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "5/7";
    setindc();
    clip_indc[4].classList.add("active-clip");
  }

  if (t == 5) {
    document.querySelectorAll(".fass-clip")[0].textContent = "6/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "6/7";
    setindc();
    clip_indc[5].classList.add("active-clip");
    firstdragclip.style.transform = "translatey(" + 0 + "px)";
    dragtittleclip.style.transform = "translatey(" + 0 + "px)";
    opacityDiv.style.display = "block";
    setTimeout(myGreetingclip, 1000);
    setTimeout(myGreetingclip2, 1500);
  }

  if (t == 6) {
    document.querySelectorAll(".fass-clip")[0].textContent = "7/7";
    document.querySelectorAll(".fass-clip")[1].textContent = "7/7";
    setindc();
    clip_indc[6].classList.add("active-clip");
  }
}

// function pilot backword clip/////// /// testmonial sliding///////////

function indreset() {
  let setIndc = document.querySelectorAll(".testmon-ind");

  for (let i = 0; i < setIndc.length; i++) {
    setIndc[i].classList.remove("ind-active");
  }
}
function s_opac() {
  let slidSet = document.querySelectorAll(".testmon-slider");
  for (let i = 0; i < slidSet.length; i++) {
    slidSet[i].classList.remove(".slider-opac");
  }
}

document.querySelector(".testmon-slider1").classList.add("slider-opac");

function back_position() {
  let scr = window.scrollY / 1.5;

  if (scr >= 1700) {
    scr = 1700;
  }

  document.querySelector(".testmon-dad").style.backgroundPosition = "50%" + scr + "px";
}

function slidetestm(b) {
  scrollamount = 100;

  maxscroll = 400;

  current = (current - scrollamount) * 1;

  if (current <= -maxscroll) {
    indreset();

    document.querySelector(".testmon-ind1").classList.add("ind-active");

    current = 0;
  }

  if (current == 0 || b == 1) {
    current = 0;

    indreset();

    document.querySelector(".testmon-ind1").classList.add("ind-active");

    s_opac();

    document.querySelector(".testmon-slider1").classList.add("slider-opac");

    setTimeout(function () {
      document.querySelector(".testmon-slider1").style.left = "0";
    }, 700);

    setTimeout(function () {
      document.querySelector(".testmon-slider2").style.left = "-100%";
    }, 400);

    setTimeout(function () {
      document.querySelector(".testmon-slider2").style.left = "100%";
    }, 900);

    setTimeout(function () {
      document.querySelector(".testmon-slider3").style.left = "-100%";
    }, 200);

    setTimeout(function () {
      document.querySelector(".testmon-slider3").style.left = "200%";
    }, 500);

    setTimeout(function () {
      document.querySelector(".testmon-slider4").style.left = "-100%";
    }, 200);

    setTimeout(function () {
      document.querySelector(".testmon-slider4").style.left = "300%";
    }, 1000);
  }

  if (current == -100 || b == 2) {
    current = -100;

    indreset();

    document.querySelector(".testmon-ind2").classList.add("ind-active");

    s_opac();

    document.querySelector(".testmon-slider2").classList.add("slider-opac");

    setTimeout(function () {
      document.querySelector(".testmon-slider1").style.left = "100%";
    }, 400);

    setTimeout(function () {
      document.querySelector(".testmon-slider2").style.left = "0";
    }, 900);

    setTimeout(function () {
      document.querySelector(".testmon-slider3").style.left = "200%";
    }, 500);

    setTimeout(function () {
      document.querySelector(".testmon-slider4").style.left = "300%";
    }, 500);
  }

  if (current == -200 || b == 3) {
    indreset();

    current = -200;

    document.querySelector(".testmon-ind3").classList.add("ind-active");

    s_opac();

    document.querySelector(".testmon-slider3").classList.add("slider-opac");

    setTimeout(function () {
      document.querySelector(".testmon-slider2").style.left = "200%";
    }, 800);

    setTimeout(function () {
      document.querySelector(".testmon-slider2").style.left = "-200%";
    }, 400);

    setTimeout(function () {
      document.querySelector(".testmon-slider3").style.left = "0";
    }, 600);
  }

  if (current <= -300 || b == 4) {
    indreset();
    current = -300;

    document.querySelector(".testmon-ind4").classList.add("ind-active");

    s_opac();

    document.querySelector(".testmon-slider4").classList.add("slider-opac");

    setTimeout(function () {
      document.querySelector(".testmon-slider1").style.left = "100%";
      document.querySelector(".testmon-slider2").style.left = "200%";
      document.querySelector(".testmon-slider3").style.left = "300%";
    }, 400);

    setTimeout(function () {
      document.querySelector(".testmon-slider4").style.left = "0";
    }, 700);
  }

  document.querySelector(".js-sliding").classList.add("t-active");

  setTimeout(function () {
    document.querySelector(".js-sliding").classList.remove("t-active");
  }, 1600);

  setTimeout(function () {
    document.querySelector(".js-sliding").style.left = `${current}%`;
  }, 700);
}

const myintervalfour = setInterval(mytimerfour, 12000);
function mytimerfour() {
  slidetestm();
}

// function pilot backword clip/////// /// testmonial sliding///////////

// resizee///
function go() {
  document.querySelector(".present-clip").style.height = window.innerHeight - 25 + "px";

  wid = document.querySelector(".testmon-slide").clientWidth;
  for (let i = 0; i < testmSlider.length; i++) {
    testmSlider[i].style.width = wid + "px";
  }
  document.querySelector(".js-sliding").style.width = wid * 4 + "px";

  //   if (current >= 0) return $(".js-sliding").css("left", `${0}px`);
}
// resizee///
