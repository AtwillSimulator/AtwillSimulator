let username;
const quotes = ["That's powerful", "That's a shame"];


document.getElementById("ATH1").textContent = "Atwill Simulator";
document.getElementById("ATP").textContent = "WARNING: This webpage is not fully functional yet.";
document.getElementById("Name").textContent = "Username: ";
document.getElementById("AtwillQuote").textContent = "Mr Atwill's Wise Words"
document.getElementById("AtwillImage").textContent = "No Atwill Yet 😭";


document.getElementById("UsernameButton").onclick = function(){
    username = document.getElementById("Text1").value;
    if (username == "lansdown") {
        window.alert("ERROR: Username unavailable")
    } else {
        if (username == "landsdown") {
            window.alert("ERROR: Username unavaliable")
        } else {
            document.getElementById("Name").textContent = "Username: " + username;
        } 
    }
}
document.getElementById("QuoteButton").onclick = function(){
    document.getElementById("AtwillQuote").textContent = `"` + quotes[Math.floor(Math.random() * quotes.length)] + `"` + `\n- Mr Atwill`;
}

/*
Atwill Simulator, let's go
Atwill Simulator is a webpage designed and based on Mr. Thomas Atwill
*/