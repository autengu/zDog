const TAU = Zdog.TAU;
let isSpinning = true;

let car = new Zdog.Illustration({
  // set canvas with selector
  element: '.car',
  dragRotate: true,
  zoom: 0.5,
  onDragStart: function() {
    isSpinning = false;
  },
});

let front = new Zdog.Rect({
  addTo: car,
  width: 80,
  height: 24,
  stroke: 10,
  translate: { x: -120, y: 20 },
  // turn to face left
  rotate: { y: TAU / 4 },
  color: '#000000',
  fill: true
});

let headLightLeft = new Zdog.Rect({
  addTo: front,
  stroke: 5,
  height: 3,
  translate: { x: 34, z: 8 },
  color: '#ffffff',
  fill: true
});

let headLightRight = headLightLeft.copy({
  translate: { x: -34, z: 8 },
});

let windshieldFrame = front.copy({
  height: 32,
  translate: { x: -78, y: -14 },
});

let windshield = new Zdog.Rect({
  addTo: windshieldFrame,
  stroke: 4,
  translate: {z: 4, y: -4},
  height: 20,
  width: 70,
  color: '#ffffff',
  fill: true
});

let roofTop = front.copy({
  translate: { y: -40, x: -24 },
  height: 80,
  width: 140,
  // turn to face up
  rotate: { x: TAU / 4 },
  // color: '#636',
});

let hood = roofTop.copy({
  width: 30,
  translate: { y: 0, x: -100 },
  // color: '#ff0000'
});

let windshieldBack = front.copy({
  height: 64,
  translate: { x: 48 },
  color: '#000000',
  rotate: { y: TAU / 4 }
});

let tireLF = new Zdog.Ellipse({
  addTo: car,
  diameter: 20,
  translate: { z: 40, y: 32, x: -80 },
  stroke: 7,
  color: '#000000',
});

let tireRF = tireLF.copy({
  translate: { z: -40, y: 32, x: -80 },
  // color: '#000000',
});

let tireLB = tireLF.copy({
  translate: { z: -40, y: 32, x: 20 },
  // color: '#000000',
});

let tireRB = tireLF.copy({
  translate: { z: 40, y: 32, x: 20 },
  // color: '#000000',
});


function animate() {
  // rotate
  if ( isSpinning ) {
    car.rotate.y += 0.01;
  }
  car.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();
