var thisWindow = document.getElementById(containerElement);
var current = 0;
var numberOf = (document.getElementById(containerElement).getElementsByClassName(scrollToElement).length);
var selectorOf = document.getElementsByClassName(scrollToElement);
var direction = +1;

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
  e.preventDefault();
  e.returnValue = false;
}

function throttle(wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      scroll(selectorOf,(current+direction));
      time = Date.now();
    }
  }
}

function scroll(element,number) {
  if (number < numberOf && number > -1 ){
    thisWindow.scrollTo({
      'left': 0,
      'top': element[number].offsetTop
    });
    current = number;
    time = Date.now();
  }
}

document.addEventListener('wheel', preventDefault, {passive: false});

window.addEventListener('wheel',
function(e) {
  if (e.deltaY < 0) {
    direction = -1;
  }
  if (e.deltaY > 0) {
    direction = +1;
  }
})
window.addEventListener('wheel', throttle(throttleTime))
