let needleh;
let space;
const cracksN = 10;
let needles = [];
let cracks = [];
let counter = 0;
let pi = 3.14;

function setup() {
    createCanvas(innerWidth, innerHeight);
    space = height / cracksN;
    needleh = space / 2;

    for (let j = -height / 2; j <= height / 2; j += space) {
        let c = new Crack(j);
        cracks.push(c);
    }
}

function mousePressed() {
    for (i = 0; i < 22; i++) {
        n = new Needle(random(-width / 2, width / 2), random(-height / 2, height / 2), random(PI));
        if (n.int === true) {
            counter++;
        }
        needles.push(n);
    }
    console.log('π is approximatley: ', (needles.length) / (counter));
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    fill(255);
    for (let n of needles) {
        n.show();
    }
    for (let c of cracks) {
        c.update();
    }

    if (needles.length >= 4000) {
        fill(0);
        stroke(255);
        textAlign(CENTER);
        textSize(40);
        rectMode(CENTER);
        rect(0, 0, 400, 100)
        text('PLEASE REFRESH!', 0, 0);
        console.warn('PLEASE REFRESH!');
        for (let i = 0; i <= 3000; i++) {
            needles.shift();
        }
        noLoop();
    }

    textSize(50);
    fill(0, 3.14, 255);
    stroke(255);
    text('π: ' + pi, width / 2 - 500, height / 2 - 50);
    pi = (needles.length) / (counter);
}