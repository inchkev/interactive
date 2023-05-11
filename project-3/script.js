
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio2");
let audio4 = document.getElementById("audio4");
let audio5 = document.getElementById("audio5");


$(document).one('click', function() {
  var userInput;

  while (true) {
    userInput = prompt("Enter 1, 2, or 3 to simulate low, moderate, and high pollen levels.")
    if (userInput === "1" || userInput === "2" || userInput === "3") {
      break; // Break out of the loop if the input is valid
    }
    alert("Invalid input. Please enter 1, 2, or 3.");
  }
  let pollen = parseInt(userInput);
  
  if (!isNaN())
  audio1.muted = false;
  audio2.muted = false;
  audio3.muted = false;
  audio4.muted = false;
  audio5.muted = false;
  audio1.volume = 0.0;
  audio2.volume = 0.0;
  audio3.volume = 0.0;
  audio4.volume = 0.0;
  audio5.volume = 0.0;
  audio1.play();
  audio2.play();
  // audio3.play();
  audio4.play();
  audio5.play();

  if (pollen == 1) {
    $("#treepollen").text("LOW");
    $("#grasspollen").text("LOW");
    $('#audio1').animate({volume: 0.2}, 1000);
    $('#audio2').animate({volume: 0.65}, 1000);
    $('.container').css('background', 'linear-gradient(180deg, #8AD2FB 0%, rgba(251, 255, 238, 0.2) 70.83%, #81CD67 100%)');

    for (let i = 0; i < 1500; i++) {
      var r = Math.random();
      var text;
      if (r < 0.90) {
        text = "";
      } else if (r < 0.92) {
        text = "⚘";
      } else if (r < 0.94) {
        text = "❀";
      } else if (r < 0.96) {
        text = "✿";
      } else if (r < 0.99) {
        text = "❋";
      } else if (r < 0.995) {
        text = "☘";
      }
      if (text) {
        $('#grid').append(`<p>${text}</p>`);
      } else {
        $('#grid').append(`<span></span>`);
      }
    }

    setInterval(function() {
      removeElement();
    }, 3000);

  } else if (pollen == 2) {
    $("#treepollen").text("MODERATE");
    $("#grasspollen").text("MODERATE");
    $('#audio1').animate({volume: 0.01}, 1000);
    $('#audio2').animate({volume: 0.10}, 1000);
    $('#audio4').animate({volume: 0.02}, 4000);
    $('#audio5').animate({volume: 0.28}, 3000);
    $('.container').css('background', 'linear-gradient(180deg, rgba(182, 203, 216, 1.0) 0%, rgba(251, 255, 238, 0.2) 70.83%, rgba(172, 184, 139, 1.0) 100%)');

    for (let i = 0; i < 1000; i++) {
      var r = Math.random();
      var text;
      if (r < 0.82) {
        text = "";
      } else if (r < 0.83) {
        text = "*";
      } else if (r < 0.845) {
        text = ",";
      } else if (r < 0.86) {
        text = "'";
      } else if (r < 0.87) {
        text = ".";
      } else if (r < 0.88) {
        text = ":";
      } else if (r < 0.89) {
        text = '"';
      } else if (r < 0.92) {
        text = "`";
      } else if (r < 0.925) {
        text = "/";
      } else if (r < 0.93) {
        text = "\\";
      } else if (r < 0.94) {
        text = "⚘";
      } else if (r < 0.95) {
        text = "❀";
      } else if (r < 0.96) {
        text = "✿";
      } else if (r < 0.99) {
        text = "❋";
      } else if (r < 0.995) {
        text = "☘";
      }
      if (text) {
        $('#grid').append(`<p>${text}</p>`);
      } else {
        $('#grid').append(`<span></span>`);
      }
    }

    setInterval(function() {
      removeElement();
    }, 1250);

  } else if (pollen == 3) {
    $("#treepollen").text("HIGH");
    $("#grasspollen").text("HIGH");
    $('#audio4').animate({volume: 0.02}, 4000);
    $('#audio5').animate({volume: 0.62}, 3000);
    $('.container').css('background', 'linear-gradient(180deg, rgba(213, 213, 216, 1.0) 0.0%, rgba(255, 255, 255, 0.8) 70.83%, rgba(130, 139, 126, 1.0) 100%)');

    for (let i = 0; i < 1000; i++) {
      var r = Math.random();
      var text;
      if (r < 0.64) {
        text = "";
      } else if (r < 0.64) {
        text = "/";
      } else if (r < 0.65) {
        text = "\\";
      } else if (r < 0.67) {
        text = "*";
      } else if (r < 0.69) {
        text = ",";
      } else if (r < 0.70) {
        text = '"';
      } else if (r < 0.705) {
        text = '‘';
      } else if (r < 0.71) {
        text = '’';
      } else if (r < 0.72) {
        text = "-";
      } else if (r < 0.73) {
        text = ":";
      } else if (r < 0.75) {
        text = "'";
      } else if (r < 0.77) {
        text = "`";
      } else if (r < 0.79) {
        text = "~";
      } else if (r < 0.83) {
        text = ".";
      } else if (r < 0.84) {
        text = "°";
      } else if (r < 0.86) {
        text = ",";
      } else if (r < 0.88) {
        text = "'";
      } else if (r < 0.93) {
        text = "";
      } else if (r < 0.94) {
        text = "⚘";
      } else if (r < 0.95) {
        text = "❀";
      } else if (r < 0.96) {
        text = "✿";
      } else if (r < 0.995) {
        text = "❋";
      } else if (r < 0.997) {
        text = "☘";
      }
      if (text) {
        $('#grid').append(`<p>${text}</p>`);
      } else {
        $('#grid').append(`<span></span>`);
      }
    }

    setInterval(function() {
      removeElement();
    }, 500);

  } else {
  }

  // $('.welcome').fadeOut(1);
  $('.welcome').fadeOut(3000);
  // $('.info').fadeIn(1000);
});



// fade color when p tag is hovered over
// $(document).on('mouseenter', 'p', function() {
//   $(this).animate({opacity: 0.3}, 1000);
// }
// ).on('mouseleave', 'p', function() {
// });




// Function to remove the last element from the grid
function removeElement() {
  const grid = document.getElementById('grid');
  const lastElement = grid.lastElementChild; // Get the last child element of the grid
  if (lastElement) {
    grid.removeChild(lastElement); // Remove the last element from the grid
    grid.prepend(lastElement);
  }
}
