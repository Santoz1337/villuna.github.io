import init from "./tumblin_down.js";

console.log("welkum 2 my webzite!!");

init().then(() => {
    const canvas = document.getElementById("render-canvas");
    
    function resizeCanvas(_event) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // I feel like there should be a way to do this in css
        // but height: 100%; width: 100% doesnt work
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
    }

    // Need to call this manually once as it seems to not work on certain screens
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
});