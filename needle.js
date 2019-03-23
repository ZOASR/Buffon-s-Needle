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
        beginShape();
        stroke(200);
        noFill();
        for (let i = -this.r; i <= TWO_PI; i += PI) {
            let x_ = cos(i) * needleh / 2 + this.x;
            let y_ = sin(i) * needleh / 2 + this.y;
            vertex(x_, y_);
        }
        fill(255);
        if (this.int === true) {
            stroke(255, 0, 30);
            strokeWeight(4);
        }
        endShape();
        //
        ellipse(this.x, this.y, 10, 10);

    }

}
