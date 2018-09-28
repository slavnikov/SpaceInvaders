import Killable from './killable.js';
import Missle from './missle.js';

class Enemy extends Killable {
  constructor(x, y, width, height, xBounds) {
    super(x, y, width, height, xBounds, {min: 0, max: 100}, 5, 2);
    this.ref = Math.random();
  }

  getVx() {
    if (this.x + this.width >= this.xBounds.max || this.x <= this.xBounds.min) {
      this.yBounds.max = this.yBounds.max + 50;
      this.vx *= -1;
    }

    return this.vx;
  }

  fireMissle() {
    new Missle(this.x + this.width / 2, this.y + this.height, 7, "PlayerShip");
  }

  translate() {
    if (Math.random() < 0.007) {
      this.fireMissle();
    }
    this.getVx();
    super.translate();
  }
}

export default Enemy;
