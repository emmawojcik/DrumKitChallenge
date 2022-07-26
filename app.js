const drumkit = document.getElementsByClassName('drum');

function playSound(audioPath) {
  let drumSound = new Audio(audioPath);
  drumSound.play();
}

Array.from(drumkit).forEach(drum => {
  drum.addEventListener('click', (event) => {
    playSound(`sounds/${drum.id}.wav`);
  });
});

document.addEventListener('keydown', (event) => {
  if(event.key == 'a'){
    playSound('sounds/boom.wav');
  }
  else if (event.key == 's'){
    playSound('sounds/clap.wav');
  } else if (event.key == 'd'){
    playSound('sounds/hihat.wav');
  } else if (event.key == 'f'){
    playSound('sounds/kick.wav');
  } else if (event.key == 'g'){
    playSound('sounds/openhat.wav');
  } else if (event.key == 'h'){
    playSound('sounds/ride.wav');
  } else if (event.key == 'j'){
    playSound('sounds/snare.wav');
  } else if (event.key == 'k'){
    playSound('sounds/tink.wav');
  } else if (event.key == 'l'){
    playSound('sounds/tom.wav');
  }
});





