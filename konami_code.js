const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let body = document.querySelector('body');
  let index = 0;

  body.addEventListener('keydown', function (event) {
    // console.log(event);
    let key = parseInt(event.detail || event.which);
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("You've cracked the code!");
        index = 0;
      }
    } else {
        index = 0;
      }
    });
  }

  init();
