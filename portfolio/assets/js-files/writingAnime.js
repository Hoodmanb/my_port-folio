//handwriting config
const phrasesArray = [
  ["Joshua!", "Chibuzo!"],
  ["Drawing 🗽", "Coding 💻", "Rap-songs 🎧", "Motorcycling 🏍️", "Movies 📽️", "Food 🤭", "Football ⚽", "Tennis 🏓"],
  ["Drop me a message!", "I would reply in a flash."],
  // Add more phrases as needed
];

function simulateHandwriting(container, text) {
  let index = 0;

  //funtion to type animation
  function type() {
    container.innerHTML = text[index].substring(0, container.innerHTML.length + 1);
    if (container.innerHTML === text[index]) {
      setTimeout(erase, 3000);
    } else {
      setTimeout(type, 200);
    }
  }

  //function to erase animation
  function erase() {
    container.innerHTML = text[index].substring(0, container.innerHTML.length - 1);
    if (container.innerHTML === "") {
      index = (index + 1) % text.length;
      setTimeout(function () {
        type();
      }, 200);
    } else {
      setTimeout(erase, 50);
    }
  }

  type();
}

// Start the simulation for each container
document.querySelectorAll('.handwriting-container').forEach(function (container, index) {
  simulateHandwriting(container, phrasesArray[index % phrasesArray.length]);
});