// START BUTTON EVENT LISTENER:

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".startBtn").addEventListener("click", function () {
    const options = "Love, Hate, Sadness, Joy, Fun, Confusion, Paranoia";
    let userMood = prompt("What are you in the mood for? Options: " + options);
    if (userMood) {
      userMood = userMood.toUpperCase(); // Make answer uppercase
      document.querySelector(
        ".siteTitle"
      ).innerText = `IN THE MOOD FOR ${userMood}`;
    }
  });
});
