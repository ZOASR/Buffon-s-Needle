class Needle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.int = false;
        this.d;

        for (let j = -height / 2 + space; j < height / 2; j += space) {
            if (j - this.y < space / 2) {
                this.d = dist(this.x, this.y, this.x, j);
            }
        }

        if (this.d < .5 * needleh * sin(this.r)) {
            this.int = true;
        }
    }

    show() {
        stroke(200);
        strokeWeight(2);
        beginShape();
        for (let i = -this.r; i <= TWO_PI; i += PI) {
            let x_ = cos(i) * needleh / 2 + this.x;
            let y_ = sin(i) * needleh / 2 + this.y;
            vertex(x_, y_);
        }
        fill(255);
        if (this.int === true) {
            strokeWeight(4);
            stroke(255, 0, 30);
        }
        endShape();
        strokeWeight(1.5);
        ellipse(this.x, this.y, needleh / 4, needleh / 4);
        strokeWeight(2);
    }

}