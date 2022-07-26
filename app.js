const drumkit = document.getElementsByClassName('drum');

Array.from(drumkit).forEach(drum => {
  drum.addEventListener('click', (event) => {
    let drumSound = new Audio (`sounds/${drum.id}.wav`);
    drumSound.play();
  })
})





