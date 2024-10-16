
let navToggler = document.getElementById('nav-toggler');
let toggleIconBars = document.querySelectorAll('#nav-toggler .icon');
let xBar = document.querySelector('#nav-toggler i.x-bar');

// Navbar fixed Scroll & Change Colors
addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    let logo = document.getElementById('logo');

    navbar.classList.toggle("sticky", window.scrollY > 0);

    if (window.scrollY > 0) {
        logo.src = "./images/logo-color.png";
        logo.style.marginBottom = '25px';
        navToggler.style.marginBottom = '25px';
        toggleIconBars.forEach((i) => { i.style.cssText = `color: #222 !important` });

    } else {
        logo.src = "./images/bakery-light-1.png";
        logo.style.marginBottom = '0';
        navToggler.style.marginBottom = '0';
        toggleIconBars.forEach((i) => { i.style.cssText = `color: #fff !important` });
    }
})

// Change Nav links Color on Hover :
let myelements = document.querySelectorAll('.navbar .navbar-nav .nav-link');

myelements.forEach((e) => {
    e.onmouseover = function () {
        e.style.cssText = `color: var(--main-color) !important;`;
    }

    e.onmouseout = function () {
        e.style.color = "black";
    }
})

// Change Toggler Icon on Click: 
navToggler.addEventListener('click', function () {
    toggleIconBars.forEach((icon) => {
        icon.classList.toggle('display');
    })
})

// Create Accent Color Box:
let mainBox = document.createElement('div');
mainBox.setAttribute('class', 'main-box');

let toggler = document.createElement('div');
toggler.setAttribute('class', "icon-toggle");
toggler.innerHTML = '<i class="fa-solid fa-palette"></i>';

let colorsTitle = document.createElement('h4');
colorsTitle.innerText = 'Choose Accent Color:';

let ColorsBox = document.createElement('div');
ColorsBox.classList.add('colors-box')

mainBox.appendChild(toggler);
mainBox.appendChild(colorsTitle);
mainBox.appendChild(ColorsBox);
document.body.appendChild(mainBox)

const color = ['#8e7754', '#836397', '#218fe6', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#009688', '#4caf50', '#ff9800', '#ff5722', '#795548', '#607d8b',];

let myColors = [];

for (let i = 0; i < color.length; i++) {
    let boxColor = document.createElement('span');
    boxColor.classList.add('box-color')
    boxColor.style.cssText = `background-color: ${color[i]};`;
    ColorsBox.appendChild(boxColor);

    myColors.push(boxColor);
}

toggler.addEventListener('click', function () {
    mainBox.classList.toggle("toggle-box");
    if (mainBox.classList.contains('toggle-box')) {
        toggler.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        toggler.innerHTML = '<i class="fa-solid fa-palette"></i>';
    }
})

const root = document.documentElement;

function changeRootColor() {
    const style = getComputedStyle(this);
    const backgroundColor = style.backgroundColor;
    localStorage.setItem('bgColor', backgroundColor);
    root.style.setProperty('--main-color', backgroundColor)
}

if (localStorage.getItem('bgColor')) {
    root.style.setProperty('--main-color', `${localStorage.getItem('bgColor')}`)
} else {
    root.style.setProperty('--main-color', `#8e7754`)
}

myColors.forEach((box) => {
    box.addEventListener('click', changeRootColor)
})


// Scroll Up Button 
let scrollUp = document.querySelector(".scroll-button");

window.onscroll = function () {

    if (window.scrollY >= 635) {

        scrollUp.style.display = "block";

    } else {

        scrollUp.style.display = "none";

    }
}

scrollUp.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
};

