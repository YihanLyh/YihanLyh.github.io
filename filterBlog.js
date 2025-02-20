const buttonA = document.querySelector("#filter-all");
const buttonB = document.querySelector("#filter-otherwork");
const buttonC = document.querySelector("#filter-photography");
const buttonD = document.querySelector("#filter-travel");

const aBoxes = Array.from(document.querySelectorAll(".allProjectsCards .a"));
const bBoxes = Array.from(document.querySelectorAll(".allProjectsCards .b"));
const cBoxes = Array.from(document.querySelectorAll(".allProjectsCards .c"));
const dBoxes = Array.from(document.querySelectorAll(".allProjectsCards .d"));

const allBoxes = [...aBoxes, ...bBoxes, ...cBoxes, ...dBoxes];

buttonB.addEventListener("click", () => {
    buttonB.classList.add("active");
    buttonA.classList.remove("active");
    buttonC.classList.remove("active");
    buttonD.classList.remove("active");

    const hideBoxes = [...aBoxes, ...cBoxes, ...dBoxes];
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

    const hideBoxes = [...aBoxes, ...bBoxes, ...dBoxes];
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

    const hideBoxes = [...aBoxes, ...bBoxes, ...cBoxes];
    hideBoxes.map((box) => {
        box.style.display = "none";
    });
    dBoxes.map((box) => {
        box.style.display = "flex";
        box.style.opacity = "1";
    });

});


buttonA.addEventListener("click", () => {
    buttonA.classList.add("active");
    buttonB.classList.remove("active");
    buttonC.classList.remove("active");
    buttonD.classList.remove("active");

    allBoxes.map((box) => {
        box.style.display = "flex";
        //box.style.opacity = "1";
    });
});