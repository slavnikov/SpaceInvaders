import Killable from './killable.js';
import Missle from './missle.js';
import { game, lifeBar } from '../main.js';
import { rocketFire, laserHit, rocketHit } from '../objects/sounds.js';
import { missileImage } from '../objects/images.js';

class PlayerShip extends Killable {
  constructor(props) {
    super(props);
    this.ref = 'player';
    this.toggleReload = this.toggleReload.bind(this);
    this.needsReload = false;
    this.LBContext = lifeBar.getContext("2d");
    this.maxHp = props.hp;

    this.drawLifeBar();
  }

  fireMissle() {
    const missle = new Missle({
      x: this.x + this.width / 2,
      y: this.y,
      width: 10,
      height: 36,
      xBounds: null,
      yBounds: {min: -50, max: 800},
      vx: 0,
      vy: -8,
      foe: "Enemy",
      damage: 1,
      image: missileImage,
      fireSound: rocketFire,
      impactSound: rocketHit,
    });
  }

  toggleReload() {
    this.needsReload = !this.needsReload;
  }

  drawLifeBar() {
    const percentLifeLeft = this.hp / this.maxHp;
    const lifeLeft = 500 * percentLifeLeft;

    this.LBContext.clearRect(0, 0, lifeBar.width, lifeBar.height);
    this.LBContext.beginPath();
    this.LBContext.fillStyle= '#7A0000';
    this.LBContext.rect(0, 0 + (500 - lifeLeft), 30, lifeLeft);
    this.LBContext.fill();
    this.LBContext.closePath();
  }

  getHit(damage) {
    super.getHit(damage);
    this.drawLifeBar();
    game.changeScore(damage * -1);
  }

  delete () {
    super.delete();
    game.gameOver();
  }
}

export default PlayerShip;
