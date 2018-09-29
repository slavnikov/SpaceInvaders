import Movable from './movable.js';
import { game } from '../main.js';

class BackgroundParticle extends Movable {
  constructor(x, y, width, height, vy) {
    super(x, y, width, height, null, {min: -20, max: 740}, 0, vy);
    this.ref = Math.random();
    game.background[this.ref] = this;
  }

  translate() {
    super.translate();
    if (this.y < 0 - this.height || this.y > 720) {
      this.delete();
    }
  }

  delete() {
    delete(game.background[this.ref]);
  }
}

export default BackgroundParticle;
