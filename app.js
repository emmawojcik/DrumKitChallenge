const drumkit = document.getElementsByClassName('drum');
const drumImage = document.getElementById('drumImage');

// Given file path, play corresponding wav file
function playSound(audioPath) {
  let drumSound = new Audio(audioPath);
  drumSound.play();
}

// Increase brightness of drums image
function lightUpImage(){
  drumImage.style.filter = 'brightness(130%)';
  setTimeout(() => {
    drumImage.style.filter = 'brightness(100%)';
  }, 500);
}

// Turn drumkit into array and add event listener to each drum button
Array.from(drumkit).forEach(drum => {
  drum.addEventListener('click', () => {
    lightUpImage();
    playSound(`sounds/${drum.id}.wav`);
  });
});

// Add event listener for relevant keyboard presses
document.addEventListener('keydown', (event) => {
  if(event.key == 'a'){
    lightUpImage();
    playSound('sounds/boom.wav');
  }
  else if (event.key == 's'){
    lightUpImage();
    playSound('sounds/clap.wav');
  } else if (event.key == 'd'){
    lightUpImage();
    playSound('sounds/hihat.wav');
  } else if (event.key == 'f'){
    lightUpImage();
    playSound('sounds/kick.wav');
  } else if (event.key == 'g'){
    lightUpImage();
    playSound('sounds/openhat.wav');
  } else if (event.key == 'h'){
    lightUpImage();
    playSound('sounds/ride.wav');
  } else if (event.key == 'j'){
    lightUpImage();
    playSound('sounds/snare.wav');
  } else if (event.key == 'k'){
    lightUpImage();
    playSound('sounds/tink.wav');
  } else if (event.key == 'l'){
    lightUpImage();
    playSound('sounds/tom.wav');
  }
});





