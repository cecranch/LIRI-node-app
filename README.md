# LIRI-node-app

This is my first node.js application!

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. I will create a LIRI -  a command line node app that takes in parameters and gives back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

To retrieve the data, the app will send requests using the axios package to the Bands in Town, Spotify and OMDB APIs.


My LIRI Commands:

node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")





node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from


If no song is provided, the program will default to "The Sign" by Ace of Base.



node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


