// Main page sketch

let mountain;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);

    push();
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.02);
    for (var i = 1; i <= 3; i++) {
        torus(i*120, 30);
    }
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}