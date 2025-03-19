const left = document.getElementById("leftbtn");
const right = document.getElementById("rightbtn");
const slider = document.querySelector(".slider");
const logoname = document.getElementById("logoname");
const image = document.querySelectorAll(".image");
const textWall = document.getElementById("textwall");

console.log(image);
// creating an array which has names of the company of the cars
let carName = Array.from(image).map(element => element.src.slice(60,-4).toUpperCase());
carName.forEach((item, index, arr) => {
    const hyphenIndex = item.indexOf("-");
    arr[index] = hyphenIndex !== -1 ? item.slice(0, hyphenIndex) : item; 
    arr[index] = arr[index].replaceAll("%20", " ").replaceAll("/", "");
});

// creating an array which has full name of the cars
let carNameWithHyphen = Array.from(image).map(element => element.src.slice(60,-4).toUpperCase());
carNameWithHyphen.forEach((item, index, arr) => {
    arr[index] = item.replaceAll("-", " ");
    arr[index] = arr[index].replaceAll("%20", " ").replaceAll("/", "");
})

console.log(carName);
console.log(carNameWithHyphen);
// controls the next / previous mechanism of image slider
let slideNumber = 0;
let prevSlideNumber = 0;

// adding small buttons at the bottom for easier navigation
for (let i = 0; i<image.length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    minibtn.appendChild(div);
}
const buttons = document.querySelectorAll(".button");

// making the first circle white and updating name of company
buttons[0].style.backgroundColor = "white";
logoname.textContent = `${carName[slideNumber]}`;

// background creating algorithm
let repeatedText = 'BUGATTI VEYRON - '.repeat(10000).trim();
textWall.textContent = `${repeatedText}`;

// function which updates company name after each change
function updateName () {
    logoname.style.transform += `translateY(100px)`;
    buttons[prevSlideNumber].style.backgroundColor = "transparent";
    prevSlideNumber = slideNumber;
    textWall.style.color = `rgba(255, 255, 255, 0)`
    setTimeout(() => {
        logoname.textContent = `${carName[slideNumber]}`;
        logoname.style.transform += `translateY(-100px)`;
        buttons[prevSlideNumber].style.backgroundColor = "white";
        textWall.style.color = `rgba(255, 255, 255, 0.4)`        
        repeatedText = `${carNameWithHyphen[prevSlideNumber]} - `.repeat(10000).trim();
        textWall.textContent = `${repeatedText}`;
    }, 800);
}

let clickable = true;
// left moving mechanism
left.addEventListener("click", () => {
    if (!clickable)
            return;
    
    clickable = false;
    setTimeout(() => {
        clickable = true;
    }, 1000);
    if (slideNumber === 0) {
        slider.style.transform = `translateX(${-750 * (image.length-1)}px)`;
        slideNumber = image.length-1;
    } 
    else {
        slider.style.transform += `translateX(750px)`;
        slideNumber--;
    }
    updateName();
})

// right moving mechanism
right.addEventListener("click", () => {
        if (!clickable)
            return;
    
    clickable = false;
    setTimeout(() => {
        clickable = true;
    }, 1000);
    slideNumber = (slideNumber + 1) % image.length;
    slider.style.transform = `translateX(-${slideNumber * 750}px)`;
    updateName();
})

// button mechanism
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        slider.style.transform = `translateX(-${i * 750}px)`;
        slideNumber = i;
        updateName();
    })
})