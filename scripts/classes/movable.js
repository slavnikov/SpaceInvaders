import Drawable from './drawable.js';

class Movable extends Drawable {
  constructor(props) {
    super(props);
    this.xBounds = props.xBounds || {min: 0, max: 1250};
    this.yBounds = props.yBounds || {min: 0, max: 720};
    this.vx = props.vx || 0;
    this.vy = props.vy || 0;
  }

  translateH() {
    if (
      this.x + this.vx > this.xBounds.min &&
      this.x + this.vx < this.xBounds.max
    )
      {
        this.x += this.vx;
      }
    if (this.x + this.width + this.vx >= this.xBounds.max) {
      this.x = this.xBounds.max - this.width;
    }
    if (this.x + this.vx <= this.xBounds.min) {
      this.x = this.xBounds.min;
    }
  }

  translateV() {
    if (
      this.y + this.vy > this.yBounds.min &&
      this.y + this.vy < this.yBounds.max
    )
      {
        this.y += this.vy;
      }
    if (this.y + this.vy >= this.yBounds.max - this.height) {
      this.y = this.yBounds.max - this.height;
    }
    if (this.y + this.vy <= this.yBounds.min) {
      this.y = this.yBounds.min;
    }
  }

  translate() {
    this.translateH();
    this.translateV();
  }

  moveHorizantally(speed) {
    this.vx = speed;
  }

  moveVertically(speed) {
    this.vy = speed;
  }

  draw(context) {
    this.translate();
    super.draw(context);
  }
}

export default Movable;
