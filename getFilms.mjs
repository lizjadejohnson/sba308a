// GET MOVIES WITH LOVE KEYWORDS EXAMPLE:

export async function getFilms(moodIDs, callback) {
  //Separated with an (OR) |  -> 9673|9840|157303|158718|7879
  const keywordIDs = moodIDs.join("|");
  // Exmaple Keyword string for love movies:
  // keywordIDs = "9673%7C9840%7C157303%7C1787958718%7C";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGEzOTliYjU1YTU4NDU1MzlmODZiYjdjNjc1ZjA4ZSIsInN1YiI6IjU5MWVmMGU0YzNhMzY4Nzc0ZTAzNTBjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2iT8D8OojvpqUbPjhmOXPYd-qRYdQNMipqJ24ZgAGJA",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&vote_average.gte=6&vote_count.gte=800&with_keywords=${keywordIDs}`,
      options
    );
    const data = await response.json();
    if (data.results.length >= 9) {
      const shuffled = data.results.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 9);
      callback(selected);
    } else {
      console.log("Not enough movies to display");
    }
  } catch (err) {
    console.error(err);
  }
}
