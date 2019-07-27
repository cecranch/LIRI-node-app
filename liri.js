// set any environment variables with the dotenv package:
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");

// code to import the keys.js file and store it in a variable.
var keys = require("./keys.js");


// You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);



// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API 
// ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

// -Name of the venue
// -Venue location
// -Date of the Event (use moment to format this as "MM/DD/YYYY")