// Global script to play a random sound effect on any click.
// Loads a list of audio clips and attaches a single click
// handler to the document body. Each time a click occurs,
// one of the sounds is selected at random and played.

document.addEventListener('DOMContentLoaded', () => {
  // List of available sound effects. These files reside in the
  // `audio` folder relative to the site root. If you add or remove
  // files from the folder, update this array accordingly.
  const sounds = [
    'audio/sound1.wav',
    'audio/sound2.wav',
    'audio/sound3.wav',
    'audio/sound4.wav',
    'audio/sound5.wav'
  ];

  // Function to play a random sound. Creates a new Audio
  // instance each time to allow overlapping sounds if the user
  // clicks rapidly.
  function playRandomSound() {
    const src = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(src);
    // Allow the sound to play without waiting for user interaction
    // on subsequent clicks after the first one.
    audio.play().catch(() => {});
  }

  // Attach a single click listener to the whole document. Using
  // capture phase ensures it runs even if events are stopped
  // further down the tree.
  document.body.addEventListener('click', () => {
    playRandomSound();
  }, true);
});