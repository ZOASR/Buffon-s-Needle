let needleh;
let space;
let needles = [];
let cracks = [];
let a = 0;
let n;
let counter = 0;
let pi = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    space = height / (height / 100);
    needleh = space / 2;
    //angleMode(DEGREES);
    slider = createSlider(0, PI, PI, 0.1);


    for (let i = -height / 2; i <= height / 2; i += space) {
        let c = new Crack(i);
        cracks.push(c);
    }
    console.log(space);
}

function mousePressed() {
    for (i = 0; i <= 300; i++) {
        n = new Needle(random(-width / 2, width / 2), random(-height / 2, height / 2), random(PI));
        if (n.int === true) {
            counter++;
        }
        needles.push(n);
    }

    //console.log(counter);

    console.log('π is approximatley: ', (needles.length) / (counter));
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    fill(255);
    //stroke(255);
    strokeWeight(4);
    rectMode(CENTER);
    n = new Needle(70, -25, slider.value());
    for (let i = 0; i < needles.length; i++) {
        needles[i].show();
    }
    for (let i = 0; i < cracks.length; i++) {
        cracks[i].update();
    }

    textSize(50);
    fill(0, 3.14, 255);
    noStroke();
    text('π: ', width / 2 - 500, height / 2 - 50);

    text(pi, width / 2 - 450, height / 2 - 50);
    pi = (needles.length) / (counter);

}
