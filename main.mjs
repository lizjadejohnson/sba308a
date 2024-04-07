//---------------Main App functions etc---------------

// START BUTTON EVENT LISTENER:

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".startBtn").addEventListener("click", function () {
    const options = [
      "love",
      "hate",
      "sadness",
      "happiness",
      "fun",
      "confused",
      "paranoid",
      "trapped",
      "lucky",
    ];
    let userMood = prompt(
      "What are you in the mood for? Options: " + options.join(", ")
    );
    // Check if the user input is not null and is one of the options
    if (userMood && options.includes(userMood.trim().toLowerCase())) {
      userMood = userMood.toUpperCase(); // Make answer uppercase for display
      document.querySelector(
        ".siteTitle"
      ).innerText = `IN THE MOOD FOR ${userMood}`;
    } else {
      // Inform the user their choice was not in the list
      alert("Please choose from the list: " + options.join(", "));
    }
  });
});

// ---------------Import Modules---------------

// import getFilms from "./getFilms.mjs";

// console.log(getFilms(userMood));

// ---------------[Initialized Functions()]---------------

// getFilms(userMood);
