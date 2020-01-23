const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let canvasPosition = getPosition(canvas);

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor, context) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
        this.context = context;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
        this.context.fillStyle = this.fillColor;
        this.context.fill();
        this.context.stroke();
    }

}

const x = Math.round(Math.random() * 100);
console.log(x);
const y = Math.round(Math.random() * 80);
console.log(y);
const r = Math.round(Math.random() * 60);
console.log(r);
const sAngle = 0;
const eAngle = 2 * Math.PI;

function bgColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
const color = bgColor();
console.log(color);

// EventListner to mouse event
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    console.log(e);

    mouseX = e.clientX - canvasPosition.x;
    mouseY = e.clientY - canvasPosition.y;
    const c1 = new Circle(mouseX, mouseY, r, sAngle, eAngle, color, context);
    c1.draw();
}

// Helper function to get accurate mouse position
function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}

setTimeout(function doSomething() {
    const c1 = new Circle(x, y, r, sAngle, eAngle, color, context);
    c1.draw();
    setTimeout(doSomething, 500);
}, 500);











