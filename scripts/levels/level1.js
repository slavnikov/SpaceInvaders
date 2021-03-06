import Level from '../classes/level.js';
import ClassicGrunt from '../classes/classic_grunt.js';
import { levelM } from '../objects/messages.js';
import { classicGruntImage } from '../objects/images.js';

function level1() {
  const enemies = [];

  for (var j = 1; j < 3; j++) {
    for (var i = 0; i < 10; i++) {
      const x = i * 100 + 50;
      const y = j * -150;
      const yMax = 115 - (j-1) * 115;
      const xBounds = {min: x, max: x + 287};
      const enemy = new ClassicGrunt({
        x: x,
        y: y,
        width: 80,
        height: 87,
        xBounds: xBounds,
        yBounds: {min: -2000, max: yMax},
        vx: 1.5,
        vy: 0.6,
        hp: 2,
        rateOfFire: 0.007,
        image: classicGruntImage,
      });

      enemies.push(enemy);
    }
  }


  return new Level(enemies, levelM().setDelay(3e3));
}


export default level1;
