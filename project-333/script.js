
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio2");
let audio4 = document.getElementById("audio4");
let audio5 = document.getElementById("audio5");


let pollen = 1;


$(document).one('click', function() {
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
    $('#audio1').animate({volume: 0.2}, 1000);
    $('#audio2').animate({volume: 0.65}, 1000);
    $('.container').css('background', 'linear-gradient(180deg, #A6DEFD 0%, rgba(251, 255, 238, 0.2) 70.83%, #BAEBA9 100%)');

    for (let i = 0; i < 1000; i++) {
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
        $('.grid').append(`<p>${text}</p>`);
      } else {
        $('.grid').append(`<span></span>`);
      }
    }

  } else if (pollen == 2) {
    $('#audio1').animate({volume: 0.025}, 1000);
    $('#audio2').animate({volume: 0.2}, 1000);
    $('#audio4').animate({volume: 0.06}, 4000);
    $('#audio5').animate({volume: 0.10}, 3000);
    $('.container').css('background', 'linear-gradient(180deg, rgba(207, 235, 251, 0.8) 0%, rgba(227, 227, 227, 0.6) 70.83%, rgba(214, 234, 195, 0.6) 100%)');

    for (let i = 0; i < 1000; i++) {
      var r = Math.random();
      var text;
      if (r < 0.80) {
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
      } else if (r < 0.93) {
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
        $('.grid').append(`<p>${text}</p>`);
      } else {
        $('.grid').append(`<span></span>`);
      }
    }

  } else if (pollen == 3) {
    $('#audio4').animate({volume: 0.05}, 4000);
    $('#audio5').animate({volume: 0.21}, 3000);
    $('.container').css('background', 'linear-gradient(180deg, rgba(219, 233, 240, 0.8) 13.54%, rgba(207, 207, 207, 0.5) 70.83%, rgba(205, 210, 197, 0.6) 100%)');

    for (let i = 0; i < 1000; i++) {
      var r = Math.random();
      var text;
      if (r < 0.65) {
        text = "";
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
        $('.grid').append(`<p>${text}</p>`);
      } else {
        $('.grid').append(`<span></span>`);
      }
    }

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

