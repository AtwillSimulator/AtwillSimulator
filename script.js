let score = Number(localStorage.getItem("score")) || 0;
let leastClicks = Number(localStorage.getItem("leastClicks"));
let username = localStorage.getItem("username") || "";
let currentQuote;
let countdown = 5;
let currentQuoteNum;
let getOut;
let gameOver = false;
let outOfClass = false;
let clicks = 0;
let totalClicks = Number(localStorage.getItem("total clicks")) || 0





if (Math.floor(Math.random() * 2) == 1) {
    getOut = "Brock, out"
} else {
    getOut = "Jonathan, out"
}


let quotes = ["That's powerful", "That's powerful", "Mana", "REF", "Save, Axyl", "Write in your answer", "Open up the numeracy books", "Get a red pen", "5 minutes silence", "Find a seat", countdown, "I'm an empath", "I'm the 2nd most prominent feminist at WHS [Donald Trump hands]", "Eyes and ears", getOut, "But what you have failed to consider there, is that I quite like being the centre of attention."];



const usernameErrors = {
    "atwill": "ERROR: Username taken by Atwill",
    "lansdown": "ERROR: Username taken by developer"
};

const usernameRemarks = {
    "harry": "Hey, that's me!",
    "harry sleigh": "How do you know my full name???",
    "sleigh": "[Minecraft music plays]",
    "credits": "A huge thanks to various teachers, 10W, all of my friends for playtesting, and of course, Mr Atwill!",
    "atwont": "Use correct punctuation",
    "atwon't": "Easter egg coming soon!",
    "sleigh harry": "You think you're so smart, buddy",
    "emmett": "Freaking nerd"
};





document.getElementById("ATH1").textContent = "Atwill Simulator";
document.getElementById("ATP").textContent = "5 seconds silence before you can leave.";
document.getElementById("AtwillQuote").textContent = "Mr Atwill's Wise Words";
document.getElementById("AtwillImage").width = "200";
document.getElementById("BlueForm").width = "100";
document.getElementById("click-counter").textContent = "Count: 0"
document.getElementById("total-clicks-display").textContent = "Total Quotes Clicked: " + totalClicks;
document.getElementById("leastClicksDisplay").textContent = "Least clicks: " + leastClicks;
document.getElementById("scoreDisplay").textContent = "Score: " + score;
document.getElementById("Name").textContent = "Username: " + username;




document.getElementById("UsernameButton").onclick = function(){
    const usernameAttempt = document.getElementById("Text1")
    if (usernameAttempt.value.toLowerCase() in usernameErrors) {
        window.alert(usernameErrors[usernameAttempt.value.toLowerCase()])
    } else if (usernameAttempt.value.toLowerCase() == "poppy") {
        username = "Poppy";
        localStorage.setItem("username", "Poppy");
        window.alert("You asked for it...");
        document.body.style.backgroundColor = "black"
        document.getElementById("Name").textContent = "You thought it was easy???";
        document.getElementById("total-clicks-display").textContent = "Total Quotes Clicked: 1000000"
        getOut = "Poppy, OUT"
        document.getElementById("ATH1").textContent = "Atwill Simulator: Hard Mode";
        document.getElementById("scoreDisplay").textContent = "Score: -1";
        countdown = 117;
        document.getElementById("ATP").textContent = "117 seconds silence before you can leave. And you don't even go to this school.";
        quotes = [getOut, getOut, getOut, getOut, getOut, getOut, getOut, getOut, getOut, getOut, countdown, getOut, getOut, getOut, getOut];

    } else {
        if (usernameAttempt.value.toLowerCase() in usernameRemarks) {
            window.alert(usernameRemarks[usernameAttempt.value.toLowerCase()])
        }
        username = document.getElementById("Text1").value;
        localStorage.setItem("username", username);
        document.getElementById("Name").textContent = "Username: " + username;
    }
}
document.getElementById("QuoteButton").onclick = function(){

    if (outOfClass == true) {
        window.alert("Hey! Fill out your blue form!");
    } else {
        if (currentQuote == "Okay you can go now") {
            if (!(gameOver)) {
                
                window.alert("Congratulations! You have beaten Atwill Simulator!");

                if (leastClicks == 0) {
                    leastClicks = clicks
                } else if (leastClicks > clicks) {
                    leastClicks = clicks
                }

                localStorage.setItem("leastClicks", leastClicks);

                score = Number(score) + 1;
                localStorage.setItem("score", score);
                document.getElementById("scoreDisplay").textContent = "Score: " + score;
                gameOver = true
            } else {
                window.alert("You've already won, buddy. Go get a life now")
            }
                


    } else if (currentQuote == "Brock, out" || currentQuote == "Jonathan, out" || currentQuote == "Poppy, OUT") {
        window.alert("That's a shame. You have been sent out of class!");
        outOfClass = true;
        if (outOfClass)
        document.getElementById("BlueForm").hidden = false;
    } else {
        currentQuoteNum = Math.floor(Math.random() * quotes.length);
        currentQuote = quotes[currentQuoteNum];
        document.getElementById("AtwillQuote").textContent = `"` + currentQuote + `"` + `\n- Mr Atwill`;
        clicks += 1;
        totalClicks += 1;
        document.getElementById("click-counter").textContent = "Count: " + clicks;
        document.getElementById("total-clicks-display").textContent = "Total Quotes Clicked: " + Number(totalClicks);
        localStorage.setItem("total clicks", totalClicks);
        
        
        if (currentQuoteNum == 10) {
            countdown = countdown - 1;
            quotes[10] = countdown;
            if (countdown == 0) {
                quotes[10] = "Okay you can go now";
            }
        }
    }

}
}







document.getElementById("BlueForm").onclick = function(){
    if (outOfClass) {
        window.alert("Ok, get back in class now");
        outOfClass = false;
        
        currentQuoteNum = Math.floor(Math.random() * quotes.length);
        currentQuote = quotes[currentQuoteNum];
        document.getElementById("AtwillQuote").textContent = `"` + currentQuote + `"` + `\n- Mr Atwill`;
        clicks += 1;
        totalClicks += 1;
        document.getElementById("click-counter").textContent = "Count: " + clicks
        document.getElementById("total-clicks-display").textContent = "Total Quotes Clicked: " + Number(totalClicks);
        localStorage.setItem("total clicks", totalClicks);

        document.getElementById("click-counter").textContent = "Count: " + clicks
        document.getElementById("BlueForm").hidden = true;
    }
}
