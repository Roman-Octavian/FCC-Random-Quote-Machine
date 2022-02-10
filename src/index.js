import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

//This is less than ideal, but I should not fetch random quotes remotely because this course does not cover APIs
const QUOTE_BANK = [
    {quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates"}, {quote: "The unexamined life is not worth living.", author: "Socrates"}, {quote: "Be kind, for everyone you meet is fighting a hard battle.", author: "Socrates"}, {quote: "Know thyself.", author: "Socrates"},
    {quote: "Educating the mind without educating the heart is no education at all.", author: "Aristotle"}, {quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", author: "Aristotle"}, {quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle"}, {quote: "The worst form of inequality is to try to make unequal things equal.", author: "Aristotle"},
    {quote: "I am I and my circumstances.", author: "José Ortega y Gasset"}, {quote: "I am I and my circumstance; and, if I do not save it, I do not save myself.", author: "José Ortega y Gasset"}, {quote: "Tell me what you pay attention to and I will tell you who you are.", author: "José Ortega y Gasset"}, {quote: "To remain in the past means to be dead.", author: "José Ortega y Gasset"},
    {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin"}, {quote: "Love your Enemies, for they tell you your Faults.", author: "Benjamin Franklin"}, {quote: "There never was a good war or a bad peace.", author: "Benjamin Franklin"}, {quote: "Well done is better than well said.", author: "Benjamin Franklin"},
    {quote: "It does not matter how slowly you go so long as you do not stop.", author: "Confucius"}, {quote: "I hear and I forget. I see and I remember. I do and I understand.", author: "Confucius"}, {quote: "Do not impose on others what you yourself do not desire.", author: "Confucius"}, {quote: "Before you embark on a journey of revenge, dig two graves.", author: "Confucius"},
    {quote: "Do unto others as you would have them do unto you.", author: "Jesus of Nazareth"}, {quote: "For everyone who exalts himself will be humbled, and everyone who humbles himself will be exalted.", author: "Jesus of Nazareth"}, {quote: "Let the one among you who is without sin be the first to cast a stone.", author: "Jesus of Nazareth"}, {quote: "Thou shalt love thy neighbour as thyself.", author: "Jesus of Nazareth"},
    {quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare"}, {quote: "All that glitters is not gold.", author: "William Shakespeare"}, {quote: "This above all; to thine own self be true.", author: "William Shakespeare"}, {quote: "The devil can cite Scripture for his purpose.", author: "William Shakespeare"},
    {quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche"}, {quote: "Sometimes people don't want to hear the truth because they don't want their illusions destroyed.", author: "Friedrich Nietzsche"}, {quote: "In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.", author: "Friedrich Nietzsche"}, {quote: "Man is the cruelest animal.", author: "Friedrich Nietzsche"},
    {quote: "In a time of deceit telling the truth is a revolutionary act.", author: "George Orwell"}, {quote: "Who controls the past controls the future. Who controls the present controls the past.", author: "George Orwell"}, {quote: "Big Brother is Watching You.", author: "George Orwell"}, {quote: "Doublethink means the power of holding two contradictory beliefs in one's mind simultaneously, and accepting both of them.", author: "George Orwell"},
    {quote: "It is not that I am mad, it is only that my head is different from yours.", author: "Diogenes of Sinope"}, {quote: "Of what use is a philosopher who doesn't hurt anybody's feelings?", author: "Diogenes of Sinope"}, {quote: "Dogs and philosophers do the greatest good and get the fewest rewards.", author: "Diogenes of Sinope"}, {quote: "No man is hurt but by himself.", author: "Diogenes of Sinope"},
    {quote: "We are not rich by what we possess but by what we can do without.", author: "Immanuel Kant"}, {quote: "Treat people as an end, and never as a means to an end.", author: "Immanuel Kant"}, {quote: "Dare to think!", author: "Immanuel Kant"}, {quote: "Out of the crooked timber of humanity, no straight thing was ever made.", author: "Immanuel Kant"},
    {quote: "I think; therefore I am.", author: "René Descartes"}, {quote: "Cogito ergo sum.", author: "René Descartes"}, {quote: "Conquer yourself rather than the world.", author: "René Descartes"}, {quote: "Doubt is the origin of wisdom.", author: "René Descartes"},
    {quote: "If we don't believe in freedom of expression for people we despise, we don't believe in it at all.", author: "Noam Chomsky"}, {quote: "How it is we have so much information, but know so little?", author: "Noam Chomsky"}, {quote: "Propaganda is to a democracy what the bludgeon is to a totalitarian state.", author: "Noam Chomsky"}, {quote: "For the powerful, crimes are those that others commit.", author: "Noam Chomsky"},
    {quote: "If you can't explain it to a six year old, you don't understand it yourself.", author: "Albert Einstein"}, {quote: "Logic will get you from A to Z; imagination will get you everywhere.", author: "Albert Einstein"}, {quote: "Anyone who has never made a mistake has never tried anything new.", author: "Albert Einstein"}, {quote: "Science without religion is lame, religion without science is blind.", author: "Albert Einstein"},
    {quote: "Quiet people have the loudest minds.", author: "Stephen Hawking"}, {quote: "Life would be tragic if it weren't funny.", author: "Stephen Hawking"}, {quote: "If time travel is possible, where are the tourists from the future?", author: "Stephen Hawking"}, {quote: "People who boast about their I.Q. are losers.", author: "Stephen Hawking"},
    {quote: "I've always wanted to be a giant space crab.", author: "Gabe Newell"}, {quote: "Better to remain silent and be thought a fool than to speak out and remove all doubt.", author: "Abraham Lincoln"}, {quote: "A bank is a place that will lend you money if you can prove that you don’t need it.", author: "Bob Hope"}, {quote: "Political correctness is tyranny with manners.", author: "Charleton Heston"}
];

class Text extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1 id="text">"{this.props.text}"</h1>
        );
    }
}

class Author extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2 id="author">— {this.props.author}</h2>
        )
    }
}

const firstQuote = QUOTE_BANK[Math.floor(Math.random() * QUOTE_BANK.length)];

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
            let newQuote = QUOTE_BANK[Math.floor(Math.random() * QUOTE_BANK.length)];
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
        document.getElementById("tweet-quote").setAttribute("href", "https://twitter.com/intent/tweet?text=" + '"' + this.state.quoteText.replace(/\s/g, "%20") + '"' + "%20—%20" + this.state.quoteAuthor.replace(/\s/g, "%20"));
    }

    render() {
        return (
        <wrapper id="quote-box" className="text-center">
            <Text text={this.state.quoteText } />
            <Author author={this.state.quoteAuthor} />
            <div id="buttons-div">
                <div id="quote-button">
                    <button type="button" id="new-quote" onClick={this.handleClick} className="btn btn-outline-info">New Quote</button>
                </div>
                <div id="tweet-button">
                    <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">
                        <button type="button" onClick={this.handleTweet} className="btn btn-outline-info">
                            <i className="fab fa-twitter"></i> Tweet
                        </button>
                    </a>
                </div>
            </div>
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