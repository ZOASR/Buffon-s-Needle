class Crack {
    constructor(y) {
        this.y = y;
    }

    update() {
        stroke(255);
        line(-width / 2, this.y, width / 2, this.y);
    }
}
