import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

const quoteData = [
  {text: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", author: "Duchess Meghan"},
  {text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
  {text: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.", author: "Lady Gaga"},
]
const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button 
        id="new-quote"
        class="button"
        onClick={handleNewQuote}>
        New Quote
      </button>
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank">
        Tweet
      </a>
    </div>
  </div>
);

const getRandomIndex = () => 
  Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => { 
    setQuote(quoteData[getRandomIndex()])
  }
  return (
    <div class="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
)
}
ReactDOM.render(<App />, document.querySelector("#app"))