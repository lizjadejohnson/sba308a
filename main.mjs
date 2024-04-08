import { getFilms } from "./getFilms.mjs";
console.log(getFilms); // Should log the function if import was successful

// Mood keywords object with associated keyword IDs
const moods = {
  love: [9673, 9840, 157303, 158718, 7879],
  hate: [296754, 202371, 312898, 6259, 10714],
  sadness: [3737, 697, 9872, 9957, 894, 2754],
  happiness: [325782, 277029, 303966, 315304, 325810],
  fun: [320420, 259376, 324285, 322268, 162487, 9253],
  confusion: [286954, 10705, 12570, 11469, 1453],
  paranoia: [2340, 201456, 10085, 1523],
  hope: [3929, 191740, 258409, 325824],
  luck: [157904, 4258, 8739, 208263, 195690, 395],
};

// Function to display movies in the HTML
function displayMovies(selectedMovies) {
  console.log("Movies to display:", selectedMovies); // Check if movies are passed correctly
  selectedMovies.forEach((movie, index) => {
    const posterPath = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    const title = movie.original_title;

    const coverArtElement = document
      .getElementById(`coverArt${index + 1}`)
      .querySelector("img");
    const movieTitleElement = document.getElementById(`movieTitle${index + 1}`);

    coverArtElement.src = posterPath;
    movieTitleElement.textContent = title;
  });
}

// Start button event listener
document.addEventListener("DOMContentLoaded", () => {
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

    if (userMood && options.includes(userMood.trim().toLowerCase())) {
      userMood = userMood.trim().toLowerCase();
      document.querySelector(
        ".siteTitle"
      ).innerText = `IN THE MOOD FOR ${userMood.toUpperCase()}`;

      // Correctly passing the displayMovies as the callback function
      getFilms(moods[userMood], displayMovies);
    } else {
      alert(
        "Please choose from the list: " +
          options.map((option) => option.toUpperCase()).join(", ")
      );
    }
  });
});
