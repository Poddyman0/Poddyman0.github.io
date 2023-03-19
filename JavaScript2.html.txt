let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
    rating: 7.6,
    year: 2001,
  },
  "Fantastic Mr. Fox": {
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: ["George Clooney", "Meryl Streep", "Bill Murray", "Jason Schwartzman",],
    runtime: 147,
    rating: 7.9,
    year: 2009,
    
  },
  "The Grand Budapest Hotel": {
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    runtime: 159,
    rating: 8.1,
    year: 2014,
    
  },
};
<html>
<p>The user can update the movie data below.</P>
</html>
let plotValue = movieData["The Darjeeling Limited"].plot;
plotValue = prompt("Update the plot of The Darjeeling Limited here: ");
delete movieData["The Darjeeling Limited"].plot;
movieData["The Darjeeling Limited"].plot = plotValue;

let castValue = movieData["The Darjeeling Limited"].cast;
castValue.push(prompt("Update the cast of The Darjeeling Limited here: "));
delete movieData["The Darjeeling Limited"].cast;
movieData["The Darjeeling Limited"].plot = castValue;

let runtimeValue = movieData["The Darjeeling Limited"].runtime;
runtimeValue = parseInt(prompt("Update the runtime of The Darjeeling Limited here: "));
delete movieData["The Darjeeling Limited"].runtime;
movieData["The Darjeeling Limited"].runtime = runtimeValue;

let ratingValue = movieData["The Darjeeling Limited"].rating;
ratingValue = parseFloat(prompt("Update the rating of The Darjeeling Limited here: "));
delete movieData["The Darjeeling Limited"].rating;
movieData["The Darjeeling Limited"].rating = ratingValue;

let yearValue = movieData["The Darjeeling Limited"].year;
yearValue = parseInt(prompt("Update the year of The Darjeeling Limited here: "));
delete movieData["The Darjeeling Limited"].year;
movieData["The Darjeeling Limited"].year = yearValue;


let plotValue2 = movieData["The Royal Tenenbaums"].plot;
plotValue2 = prompt("Update the plot of The Royal Tenenbaums here: ");
delete movieData["The Royal Tenenbaums"].plot;
movieData["The Royal Tenenbaums"].plot = plotValue2;

let castValue2 = movieData["The Royal Tenenbaums"].cast;
castValue2.push(prompt("Update the cast of The Royal Tenenbaums here: "));
delete movieData["The Royal Tenenbaums"].cast;
movieData["The Royal Tenenbaums"].plot = castValue2;

let runtimeValue2 = movieData["The Royal Tenenbaums"].runtime;
runtimeValue2 = parseInt(prompt("Update the runtime of The Royal Tenenbaums here: "));
delete movieData["The Royal Tenenbaums"].runtime;
movieData["The Royal Tenenbaums"].runtime = runtimeValue2;

let ratingValue2 = movieData["The Royal Tenenbaumsd"].rating;
ratingValue2 = parseFloat(prompt("Update the rating of The Royal Tenenbaums here: "));
delete movieData["The Royal Tenenbaums"].rating;
movieData["The Royal Tenenbaums"].rating = ratingValue2;

let yearValue2 = movieData["The Royal Tenenbaums"].year;
yearValue2 = parseInt(prompt("Update the year of The Royal Tenenbaums here: "));
delete movieData["The Royal Tenenbaums"].year;
movieData["The Royal Tenenbaums"].year = yearValue2;


let plotValue3 = movieData["Fantastic Mr. Fox"].plot;
plotValue3 = prompt("Update the plot of Fantastic Mr. Fox: ");
delete movieData["Fantastic Mr. Fox"].plot;
movieData["The Royal Tenenbaums"].plot = plotValue3;

let castValue3 = movieData["Fantastic Mr. Fox"].cast;
castValue3.push(prompt("Update the cast of Fantastic Mr. Fox here: "));
delete movieData["Fantastic Mr. Fox"].cast;
movieData["Fantastic Mr. Fox"].plot = castValue3;

let runtimeValue3 = movieData["Fantastic Mr. Fox"].runtime;
runtimeValue3 = parseInt(prompt("Update the runtime of TFantastic Mr. Fox here: "));
delete movieData["Fantastic Mr. Fox"].runtime;
movieData["Fantastic Mr. Fox"].runtime = runtimeValue3;

let ratingValue3 = movieData["Fantastic Mr. Fox"].rating;
ratingValue3 = parseFloat(prompt("Update the rating of Fantastic Mr. Foxhere: "));
delete movieData["Fantastic Mr. Fox"].rating;
movieData["Fantastic Mr. Fox"].rating = ratingValue3;

let yearValue3 = movieData["Fantastic Mr. Fox"].year;
yearValue3 = parseInt(prompt("Update the year of Fantastic Mr. Fox here: "));
delete movieData["Fantastic Mr. Fox"].year;
movieData["Fantastic Mr. Fox"].year = yearValue3;


let plotValue4 = movieData["The Grand Budapest Hotel"].plot;
plotValue4 = prompt("Update the plot of The Grand Budapest Hotel: ");
delete movieData["The Grand Budapest Hotel"].plot;
movieData["The Grand Budapest Hotel"].plot = plotValue4;

let castValue4 = movieData["The Grand Budapest Hotel"].cast;
castValue4.push(prompt("Update the cast The Grand Budapest Hotel here: "));
delete movieData["The Grand Budapest Hotel"].cast;
movieData["The Grand Budapest Hotel"].plot = castValue4;

let runtimeValue4 = movieData["The Grand Budapest Hotel"].runtime;
runtimeValue4 = parseInt(prompt("Update the runtime of The Grand Budapest Hotel here: "));
delete movieData["The Grand Budapest Hotel"].runtime;
movieData["The Grand Budapest Hotel"].runtime = runtimeValue4;

let ratingValue4 = movieData["The Grand Budapest Hotel"].rating;
ratingValue4 = parseFloat(prompt("Update the rating of The Grand Budapest Hotel here: "));
delete movieData["The Grand Budapest Hotel"].rating;
movieData["The Grand Budapest Hotel"].rating = ratingValue4;

let yearValue4 = movieData["The Grand Budapest Hotel"].year;
yearValue4 = parseInt(prompt("Update the year of The Grand Budapest Hotel here: "));
delete movieData["The Grand Budapest Hotel"].year;
movieData["The Grand Budapest Hotel"].year = yearValue4;

# Store the object below in a JavaScript file in your codebase
Render the data onto the webpage with DOM Manipulation
Allow the user to affect the display of the data by interacting with the webpage





