document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
  var keyCode = keypress_event.keyCode;
  key_display = document.getElementById("key-display");

  var new_element = document.createElement("iframe");
  // new_element.src = "https://en.wikipedia.org/wiki/" + key;
  // new_element.title = "https://en.wikipedia.org/wiki/" + key;
  new_element.src = "https://bing.com/images/search?q=" + key;
  // new_element.width = 1000;
  // new_element.height = 1000;
  new_element.classList.add("iframe-type");
  key_display.appendChild(new_element);

  let result = keyCode.toString().padStart(4, '0')
  var link = 'https://bigsoundbank.com/UPLOAD/mp3/'+result+'.mp3';
  console.log(link);
  var audio = new Audio(link);
  audio.play();
};