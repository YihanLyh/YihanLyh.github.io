const buttonA = document.querySelector("#filter-all");
const buttonB = document.querySelector("#filter-uiux");
const buttonC = document.querySelector("#filter-game");
const buttonD = document.querySelector("#filter-dev");
const buttonE = document.querySelector("#filter-interact");
const buttonF = document.querySelector("#filter-vr");
const buttonG = document.querySelector("#filter-motion");

const aBoxes = Array.from(document.querySelectorAll(".allProjectsCards .a"));
const bBoxes = Array.from(document.querySelectorAll(".allProjectsCards .b"));
const cBoxes = Array.from(document.querySelectorAll(".allProjectsCards .c"));
const dBoxes = Array.from(document.querySelectorAll(".allProjectsCards .d"));
const eBoxes = Array.from(document.querySelectorAll(".allProjectsCards .e"));
const fBoxes = Array.from(document.querySelectorAll(".allProjectsCards .f"));
const gBoxes = Array.from(document.querySelectorAll(".allProjectsCards .g"));

const allBoxes = [...aBoxes, ...bBoxes, ...cBoxes, ...dBoxes, ...eBoxes, ...fBoxes, ...gBoxes];

buttonB.addEventListener("click", () => {
    buttonB.classList.add("active");
    buttonA.classList.remove("active");
    buttonC.classList.remove("active");
    buttonD.classList.remove("active");
    buttonE.classList.remove("active");
    buttonF.classList.remove("active");
    buttonG.classList.remove("active");

    const hideBoxes = [...aBoxes, ...cBoxes, ...dBoxes, ...eBoxes, ...fBoxes, ...gBoxes];
    hideBoxes.map((box) => {
        box.style.display = "none";
    });

    bBoxes.map((box) => {
        box.style.display = "flex";
        box.style.opacity = "1";
    });
});

buttonC.addEventListener("click", () => {
    buttonC.classList.add("active");
    buttonA.classList.remove("active");
    buttonB.classList.remove("active");
    buttonD.classList.remove("active");
    buttonE.classList.remove("active");
    buttonF.classList.remove("active");
    buttonG.classList.remove("active");

    const hideBoxes = [...aBoxes, ...bBoxes, ...dBoxes, ...eBoxes, ...fBoxes, ...gBoxes];
    hideBoxes.map((box) => {
        box.style.display = "none";
    });
    cBoxes.map((box) => {
        box.style.display = "flex";
        box.style.opacity = "1";
    });

});

buttonD.addEventListener("click", () => {
    buttonD.classList.add("active");
    buttonA.classList.remove("active");
    buttonB.classList.remove("active");
    buttonC.classList.remove("active");
    buttonE.classList.remove("active");
    buttonF.classList.remove("active");
    buttonG.classList.remove("active");

    const hideBoxes = [...aBoxes, ...bBoxes, ...cBoxes, ...eBoxes, ...fBoxes, ...gBoxes];
    hideBoxes.map((box) => {
        box.style.display = "none";
    });
    dBoxes.map((box) => {
        box.style.display = "flex";
        box.style.opacity = "1";
    });

});

buttonE.addEventListener("click", () => {
    buttonE.classList.add("active");
    buttonA.classList.remove("active");
    buttonB.classList.remove("active");
    buttonC.classList.remove("active");
    buttonD.classList.remove("active");
    buttonF.classList.remove("active");
    buttonG.classList.remove("active");

    const hideBoxes = [...aBoxes, ...bBoxes, ...cBoxes, ...dBoxes, ...fBoxes, ...gBoxes];
    hideBoxes.map((box) => {
        box.style.display = "none";
    });
    eBoxes.map((box) => {
        box.style.display = "flex";
        box.style.opacity = "1";
    });

});

buttonF.addEventListener("click", () => {
    buttonF.classList.add("active");
    buttonA.classList.remove("active");
    buttonB.classList.remove("active");
    buttonC.classList.remove("active");
    buttonD.classList.remove("active");
    buttonE.classList.remove("active");
    buttonG.classList.remove("active");

    const hideBoxes = [...aBoxes, ...bBoxes, ...cBoxes, ...dBoxes, ...eBoxes, ...gBoxes];
    hideBoxes.map((box) => {
        box.style.display = "none";
    });
    fBoxes.map((box) => {
        box.style.display = "flex";
        box.style.opacity = "1";
    });

});

buttonG.addEventListener("click", () => {
    buttonG.classList.add("active");
    buttonA.classList.remove("active");
    buttonB.classList.remove("active");
    buttonC.classList.remove("active");
    buttonD.classList.remove("active");
    buttonE.classList.remove("active");
    buttonF.classList.remove("active");

    const hideBoxes = [...aBoxes, ...bBoxes, ...cBoxes, ...dBoxes, ...eBoxes, ...fBoxes];
    hideBoxes.map((box) => {
        box.style.display = "none";
    });
    gBoxes.map((box) => {
        box.style.display = "flex";
        box.style.opacity = "1";
    });

});

buttonA.addEventListener("click", () => {
    buttonA.classList.add("active");
    buttonB.classList.remove("active");
    buttonC.classList.remove("active");
    buttonD.classList.remove("active");
    buttonE.classList.remove("active");
    buttonF.classList.remove("active");
    buttonG.classList.remove("active");

    allBoxes.map((box) => {
        box.style.display = "flex";
        //box.style.opacity = "1";
    });
});