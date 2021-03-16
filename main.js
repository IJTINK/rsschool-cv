let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 100;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let direction = true;
let lastX = 0;
let lastY = 0;
let color = 0; // hue- Тон



function drawing(e){
    if(! isDrawing) return;
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    // hsl (Hue - Тон, Saturation - Насыщенность, Lightness - Яркость);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    color++;
    if (color >= 300){
        color = 0};
    if (ctx.lineWidth <= 1 || ctx.lineWidth >= 200){
        direction = !direction;
    };
    if(direction){
        ctx.lineWidth++
    }else{
        ctx.lineWidth--
    }
};

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);