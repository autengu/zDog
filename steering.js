
// let car = document.getElementById("carSVGId");

window.addEventListener('keydown', function (ev) {

  let car = document.getElementById("carId");
  switch (ev.key) {
    case "ArrowRight":
      console.log('go Right');
      // console.log();
      // debugger

      // car.style.left = parseInt(car.style.left) + 5 + 'px';

      // car.style.x = parseInt(car.style.x) + 5 + 'px';
      break;
    case "ArrowLeft":
      console.log('go Left');
      // car.style.left = parseInt(car.style.left) - 5 + 'px';
debugger
      var leftNumbers = car.style.left.replace('px', '');
      console.log(leftNumbers);
      var left = parseInt(leftNumbers, 10);

      console.log(left);
      console.log(car.style.left);

      break;
    case "ArrowUp":
      console.log('go Up');
      car.style.top = parseInt(car.style.top) - 5 + 'px';
      break;
    case "ArrowDown":
      console.log('go Down');
      car.style.top = parseInt(car.style.top) + 5 + 'px';
      break;
  };

  ev.preventDefault();
});


// var pane = $('#pane'),
//     box = $('#box'),
//     maxValue = pane.width() - box.width(),
//     keysPressed = {},
//     distancePerIteration = 3;

// function calculateNewValue(oldValue, keyCode1, keyCode2) {
//     var newValue = parseInt(oldValue, 10)
//                    - (keysPressed[keyCode1] ? distancePerIteration : 0)
//                    + (keysPressed[keyCode2] ? distancePerIteration : 0);
//     return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
// }

// $(window).keydown(function(event) { keysPressed[event.which] = true; });
// $(window).keyup(function(event) { keysPressed[event.which] = false; });

// setInterval(function() {
//     box.css({
//         left: function(index ,oldValue) {
//             return calculateNewValue(oldValue, 37, 39);
//         },
//         top: function(index, oldValue) {
//             return calculateNewValue(oldValue, 38, 40);
//         }
//     });
// }, 20);