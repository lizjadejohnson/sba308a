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
      "confusion",
      "paranoia",
      "hope",
      "luck",
    ];
    let userMood = prompt(
      "What are you in the mood for? Options: " +
        options.map((option) => option.toUpperCase()).join(", ")
    );
    // Check if the user input is not null and is one of the options
    if (userMood && options.includes(userMood.trim().toLowerCase())) {
      userMood = userMood.trim().toLowerCase();
      // Display in uppercase
      document.querySelector(
        ".siteTitle"
      ).innerText = `IN THE MOOD FOR ${userMood.toUpperCase()}`;
    } else {
      // Inform the user their choice was not in the list, display options in uppercase for consistency
      alert(
        "Please choose from the list: " +
          options.map((option) => option.toUpperCase()).join(", ")
      );
    }
  });
});

//Mood keywords object:
const moods = {
  love: ["love", "romance", "first love", "lgbt", "secret love"],
  hate: [
    "hate",
    "abuse",
    "aggressive",
    "violence",
    "psychopath",
    "serial killer",
  ],
  sadness: [
    "dying and death",
    "loss of loved one",
    "grief",
    "loneliness",
    "depression",
    "trauma",
  ],
  happiness: ["cheer", "joy", "exuberance", "happy", "euphoric"],
  fun: [
    "hilarious",
    "playful",
    "funny",
    "comedy",
    "wisecrack humor",
    "slapstick comedy",
  ],
  confusion: ["ambiguity", "confusion", "whodunit", "memory loss", "amnesia"],
  paranoia: ["paranoia", "betrayal", "obsession"],
  hope: ["hope", "friendship", "revolution"],
  luck: [
    "luck",
    "lucky",
    "lottery",
    "jackpot",
    "winning lottery",
    "sudden wealth",
    "wealth",
    "money",
    "wealthy",
  ],
};

// console.log(moods.confusion[0]);

// ---------------Import Modules---------------

// import getFilms from "./getFilms.mjs";

// ---------------[Initialized Functions()]---------------

// getFilms(moods.userMood);
