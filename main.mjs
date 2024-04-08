// Importing getFilms function from getFilms.mjs
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
  selectedMovies.forEach((movie, index) => {
    // Assuming each `.result` div has an id="resultX" where X is the index+1
    const resultElement = document.getElementById(`result${index + 1}`);

    // Update image and title inside the result div
    const coverArtElement = resultElement.querySelector(".coverArt img");
    const movieTitleElement = resultElement.querySelector(".movieTitle");

    coverArtElement.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    movieTitleElement.textContent = movie.original_title;

    // Attach a click event listener to the entire `.result` div
    resultElement.addEventListener("click", () => showMovieDetails(movie));
  });
}

function showMovieDetails(movie) {
  // Assuming `popOutCard` is already in your HTML with the style set to `display: none;` initially
  const popOutCard = document.getElementById("popOutCard");
  // Make sure to query for elements within `popOutCard` correctly
  popOutCard.querySelector(
    ".popOutCoverArt img"
  ).src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  popOutCard.querySelector(".popOutMovieTitle").textContent =
    movie.original_title;
  popOutCard.querySelector(".popOutMovieOverview").textContent = movie.overview;
  popOutCard.querySelector(
    ".popOutMovieRating"
  ).textContent = `Rating: ${movie.vote_average.toFixed(1)}/10`; // Limiting to one decimal point

  popOutCard.style.display = "block"; // Show the pop-out card
}

// Event listener for the "Start" button
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".startBtn").addEventListener("click", function () {
    const moodSelect = document.querySelector(".custom-select select");
    const selectedMood = moodSelect.value;

    if (selectedMood) {
      const moodOption = moodSelect.options[moodSelect.selectedIndex];
      const userMood = moodOption.text.toUpperCase();
      document.querySelector(
        ".siteTitle"
      ).innerText = `IN THE MOOD FOR ${userMood}`;

      if (moods[selectedMood]) {
        getFilms(moods[selectedMood], displayMovies);
      } else {
        alert("No movies found for selected mood.");
      }
    } else {
      alert("Please select a mood.");
    }
  });
});
