This application allows users to interface with the TMDB API.
When the user selects a mood from the predefined list, a pre-made collection of relevant keywords is passed to the fetch request
(along with the requirements that the film have a certain minimum rating and number of reviews).
Once the results are returned, a random selection of 9 of them is utilized and presented in the document.

This was a fun project and I was very excited when it worked. The only part I struggled with was remembering
to write the module part at first lol:
<script type="module" src="main.mjs"></script>

And then coming up with 3 separate .mjs files. I couldn't think of a third thing to include and I was strapped for time.
Hope you enjoy this and that it helps someone choose their next movie!
