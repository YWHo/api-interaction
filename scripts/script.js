'use strict';

document.addEventListener('DOMContentLoaded', startQuote);

// Global variables
var maoriQuoteBox, englishQuoteBox;


function startQuote () {

    // Add button click listener
    document.getElementById('buttonNextQuote').onclick = nextQuote;

    maoriQuoteBox = document.getElementById("quoteMaori");
    englishQuoteBox = document.getElementById("quoteEnglish");

    nextQuote();
}

function nextQuote() {
   let oReq = new XMLHttpRequest();
   oReq.addEventListener("load", reqListener);
   oReq.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs");
   oReq.send();
}

function reqListener() {
    let json = JSON.parse(this.responseText);

    maoriQuoteBox.innerHTML = json.source;
    englishQuoteBox.innerHTML = json.translation;

}