const loadQuots = () => {

    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = (quotes) => {
    const blockquote = document.getElementById('quote');
    //console.log(quotes);
    blockquote.innerHTML = quotes.quote;
}
loadQuots();