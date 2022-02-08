import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

//This is less than ideal, but I should not fetch random quotes remotely because this course does not cover APIs
const QUOTE_BANK = [
    {quote: "1", author: "a"}, {quote: "2", author: "b"}, {quote: "3", author: "c"}, {quote: "4", author: "d"},
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

class TweetQuote extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href="https://twitter.com/intent/tweet" id="tweet-quote">
                <button type="button" className="btn btn-outline-primary">
                    <i className="fab fa-twitter"></i> Tweet
                </button>
            </a>
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
            console.log("repeated")
        }
    }

    render() {
        return (
        <wrapper id="quote-box" className="text-center">
            <Text text={this.state.quoteText }/>
            <Author author={this.state.quoteAuthor} />
            <button type="button" id="new-quote" onClick={this.handleClick} className="btn btn-primary">New Quote</button>
            <TweetQuote />
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