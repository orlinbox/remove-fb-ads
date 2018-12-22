var stringOne = 'Suggested Post';
var stringTwo = 'red'; // sponsoRED
var stringThree = 'so'; // sponSOred

function removeUnwantedStuff() {
  var elArray = [];
  var spans = document.getElementsByTagName('span');
  
  for (var j = 0, l = spans.length; j < l; j++) {
    if (spans[j].className.indexOf('orlprc') < 0) {
      elArray.push(spans[j]);
    }
  }

  for (var i = 0, n = elArray.length; i < n; i++) {
    if (typeof elArray[i] !== 'undefined') {
      if (elArray[i].textContent == stringOne || elArray[i].textContent == stringTwo || elArray[i].textContent == stringThree) {
        var element = elArray[i];
        if (element.offsetWidth > 0) {
          while(element.parentNode) {
            if (element.id.indexOf('hyperfeed') > -1) {
              element.remove();
              console.log("REMOVED: " + elArray[i].textContent);
              break;
            }
            element = element.parentNode;
          }
        }
      } else {
        elArray[i].className += ' orlprc';
      }
    }
  }
}

removeUnwantedStuff();
setInterval(removeUnwantedStuff, 3000);
