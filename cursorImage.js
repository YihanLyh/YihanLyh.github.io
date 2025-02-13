document.addEventListener("DOMContentLoaded", function() {
    const headerCover = document.querySelector("#headerCoverMain");
    const floatingImg = document.getElementById("floatingImg");

    headerCover.addEventListener("mouseenter", function() {
        floatingImg.style.display = "block"; // Show image on mouse enter
    });

    headerCover.addEventListener("mouseleave", function() {
        floatingImg.style.display = "none"; // Hide image on mouse leave
    });

    headerCover.addEventListener("mousemove", function(event) {
        let rect = headerCover.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        floatingImg.style.left = `${x}px`;
        floatingImg.style.top = `${y}px`;
    });
});
