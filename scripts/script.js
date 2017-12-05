'use strict';

document.addEventListener('DOMContentLoaded', startQuote);

// Global variables
var maoriQuoteBox, englishQuoteBox;


function startQuote() {

    // Add button click listener
    document.getElementById('buttonNextQuote').onclick = nextQuote;

    maoriQuoteBox = document.getElementById("quoteMaori");
    englishQuoteBox = document.getElementById("quoteEnglish");

    nextQuote();
}

function nextQuote() {
    document.getElementById("loaderOverlay").style.display = "block";
    document.getElementById("loader").style.display = "block";
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs");
    oReq.send();
}

function reqListener() {
    let json = JSON.parse(this.responseText);

    document.getElementById("loaderOverlay").style.display = "none";
    document.getElementById("loader").style.display = "none";
    maoriQuoteBox.innerHTML = json.source;
    englishQuoteBox.innerHTML = json.translation;

}