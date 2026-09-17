let username;
let currentQuote;
let countdown = 5;
let currentQuoteNum = 11;
username = localStorage.getItem("username");
const quotes = ["That's powerful", "That's a shame", "Mana", "REF", "Save, Axyl", "Write in your answer", "Open up the numeracy books", "Get a red pen", "5 minutes silence", "Find a seat", countdown];

document.getElementById("ATH1").textContent = "Atwill Simulator";
document.getElementById("ATP").textContent = "5 seconds silence before you can leave.";
document.getElementById("AtwillQuote").textContent = "Mr Atwill's Wise Words";
document.getElementById("AtwillImage").width = "200";

if (username != null) {
    document.getElementById("Name").textContent = "Hello, " + username;
}

document.getElementById("UsernameButton").onclick = function(){
    if (document.getElementById("Text1").value.toLowerCase() == "lansdown") {
        window.alert("ERROR: Username taken by developer");
    }  else if (document.getElementById("Text1").value.toLowerCase() == "atwill") {
        window.alert("ERROR: Username taken by Atwill");
    } else {
        username = document.getElementById("Text1").value;
        localStorage.setItem("username", username);
        document.getElementById("Name").textContent = "Username: " + username;
    }
}
document.getElementById("QuoteButton").onclick = function(){
    if (currentQuote == "Okay you can go now") {
        window.alert("Congratulations! You have beaten Atwill Simulator!");
    } else {
        currentQuoteNum = Math.floor(Math.random() * quotes.length);
        currentQuote = quotes[currentQuoteNum];
        document.getElementById("AtwillQuote").textContent = `"` + currentQuote + `"` + `\n- Mr Atwill`;
        if (currentQuoteNum == 10) {
            countdown = countdown - 1;
            quotes[10] = countdown;
            if (countdown == 0) {
                quotes[10] = "Okay you can go now";
            }
        }
    }
}