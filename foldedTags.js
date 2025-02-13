const foldedIcon = document.querySelector('#folded-icon');
const foldedTag = document.querySelector('#folded-tag');
const unFoldedIcon = document.querySelector('#unfolded-icon');

unFoldedIcon.addEventListener("click", () => {
    console.log("unfolded");
    foldedTag.classList.toggle("unfolded");
});
foldedIcon.addEventListener("click", () => {
    console.log("folded");
    foldedTag.classList.remove("unfolded");
});

const navLinks = document.querySelectorAll('.mobilePages');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        foldedTag.classList.remove("unfolded");
    });
});