let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let grid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 0, 8, 9],
    [1, 2, 0, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 0, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ];

function Draw() {
    parent_bb = canvas.parentElement.getBoundingClientRect();
    canvas.width = parent_bb.width;
    canvas.height = parent_bb.height;

    let min = Math.min(canvas.width, canvas.height);
    let gridSize = min*0.8;
    let cellSize = gridSize/9 ;
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
        ctx.moveTo(xOffset+cellSize*i, yOffset);
        ctx.lineTo(xOffset+cellSize*i, yOffset+gridSize);
        ctx.moveTo(xOffset, yOffset+cellSize*i);
        ctx.lineTo(xOffset+gridSize, yOffset+cellSize*i);
        ctx.stroke();
    }
    let fontSize = cellSize/2;
    ctx.font = `${fontSize}px Arial`;
    let x, y, xCenter, yCenter, textSize;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) continue;
            xCenter = (cellSize - ctx.measureText(grid[i][j]).width)/2;
            yCenter = (7/8*cellSize - fontSize)/2 + fontSize;
            x = xOffset+xCenter+cellSize*j;
            y = yOffset+yCenter+cellSize*i;
            console.log(x, y);
            ctx.fillText(grid[i][j], x, y);
        }

    }
    
}
Draw();
window.addEventListener("resize", Draw);
