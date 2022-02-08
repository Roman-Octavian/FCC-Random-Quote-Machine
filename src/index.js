import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

//This is less than ideal, but I should not fetch random quotes remotely because this course does not cover APIs
const QUOTE_BANK = [
    {quote: "Bro don't worry we can just use a Python script for this and everything will be fine", author: "Bartosz Byriloofiafasofas"}, {quote: "2", author: "b"}, {quote: "3", author: "c"}, {quote: "4", author: "d"},
    {quote: "5", author: "e"}, {quote: "6", author: "f"}, {quote: "7", author: "g"}, {quote: "8", author: "h"},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""},
    {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}, {quote: "", author: ""}
];

class Text extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1 id="text" className="text-primary">{this.props.text}</h1>
        );
    }
}

class Author extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2 id="author">{this.props.author}</h2>
        )
    }
}

const firstQuote = QUOTE_BANK[Math.floor(Math.random() * 8)];

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteText: firstQuote.quote,
            quoteAuthor: firstQuote.author
        }
    }

    handleClick = () => {
        while (true) {
            let newQuote = QUOTE_BANK[Math.floor(Math.random() * 8)];
            if (newQuote.quote != this.state.quoteText) {
                this.setState({
                    quoteText: newQuote.quote,
                    quoteAuthor: newQuote.author
                });
                break;
            }
        }
    }

    handleTweet = () => {
        document.getElementById("tweet-quote").setAttribute("href", "https://twitter.com/intent/tweet?text=" + '"' + this.state.quoteText.replace(/\s/g, "%20") + '"' + " — " + this.state.quoteAuthor);
    }

    render() {
        return (
        <wrapper id="quote-box" className="text-center">
            <Text text={this.state.quoteText }/>
            <Author author={this.state.quoteAuthor} />
            <button type="button" id="new-quote" onClick    ={this.handleClick} className="btn btn-primary">New Quote</button>

            <a href="#" target="_blank" id="tweet-quote">
                <button type="button" onClick={this.handleTweet} className="btn btn-outline-primary">
                    <i className="fab fa-twitter"></i> Tweet
                </button>
            </a>
        </wrapper>
        );
    }
}

class RootComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="root-div" className="container-fluid">
                <QuoteBox />
            </div>
        );
    }
}


ReactDOM.render(
    <RootComponent />,
    document.getElementById("root")
)