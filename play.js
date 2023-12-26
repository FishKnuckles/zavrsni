let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function Draw() {
    parent_bb = canvas.parentElement.getBoundingClientRect();
    canvas.width = parent_bb.width;
    canvas.height = parent_bb.height;

    let min = Math.min(canvas.width, canvas.height);
    let gridSize = min*0.8;
    let xOffset = (canvas.width - gridSize)/2;
    let yOffset = (canvas.height - gridSize)/2;

    ctx.lineWidth = 10;
    ctx.rect(xOffset, yOffset, gridSize, gridSize);
    ctx.stroke();
    for(let i = 0; i<9; i++) {
        ctx.beginPath();
        if(i%3 === 0) {
            ctx.lineWidth = 5;
        }
        else {
            ctx.lineWidth = 1;
        }
        ctx.moveTo(xOffset+gridSize/9*i, yOffset);
        ctx.lineTo(xOffset+gridSize/9*i, yOffset+gridSize);
        ctx.moveTo(xOffset, yOffset+gridSize/9*i);
        ctx.lineTo(xOffset+gridSize, yOffset+gridSize/9*i);
        ctx.stroke();
    }
}
Draw();
window.addEventListener("resize", Draw);
