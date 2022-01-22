import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <wrapper id="quote-box" className="text-center">
            <Text />
            <Author />
            <NewQuoteButton />
            <TweetQuote />
        </wrapper>
        );
    }
}

class Text extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1 id="text" className="text-primary">A quote goes here</h1>
        );
    }
}

class Author extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2 id="author">An author goes here</h2>
        )
    }
}

class NewQuoteButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button type="button" id="new-quote" className="btn btn-primary">New Quote</button>
        )
    }
}

const tweetIcon = (
    <i id="fas fa-thumbs-up"></i>
)
class TweetQuote extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href="https://twitter.com/intent/tweet" id="tweet-quote">
                <button type="button" className="btn btn-outline-primary">
                    <i class="fab fa-twitter"></i> Tweet
                </button>
            </a>
        )
    }
}

ReactDOM.render(
    <div className="container-fluid">
        <QuoteBox />
    </div>,
    document.getElementById("root")
)