const quoteElements = document.querySelectorAll(".quotes li");
const quotes = Array.from(quoteElements).map(element => element.textContent);

let index = 0;
let timeLeft = 3;

function showQuote() {
    document.getElementById("quote").textContent = quotes[index];

    timeLeft = 3;
    document.getElementById("timer").textContent = `Next in: ${timeLeft}s`;

    let countdown = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Next in: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            index = (index + 1) % quotes.length;
            showQuote();
        }
    }, 1000);
}

showQuote();
