const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGEzOTliYjU1YTU4NDU1MzlmODZiYjdjNjc1ZjA4ZSIsInN1YiI6IjU5MWVmMGU0YzNhMzY4Nzc0ZTAzNTBjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2iT8D8OojvpqUbPjhmOXPYd-qRYdQNMipqJ24ZgAGJA",
  },
};

fetch("https://api.themoviedb.org/3/authentication", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
