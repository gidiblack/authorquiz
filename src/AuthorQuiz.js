import React from 'react'; // Import react app - necessary for every project
import { Link } from 'react-router-dom'; // Import link from react-router-dom
import { connect } from 'react-redux'; // connect react component to react redux store
import PropTypes from 'prop-types'; // Import proptypes for validation
import './AuthorQuiz.css'; // Import stylesheet
import './bootstrap.min.css'; // Import bootstrap

// Hero component 
function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

// Book component
function Book({title, onClick}){
  return (
    <div className="answer" onClick={() => {onClick(title);}} >
      <h4>{title}</h4>
    </div>
  )
}

// Turn component - 
function Turn({author, books, highlight, onAnswerSelected}) {
  // mapping function for background color
  function highlightToBgColor(highlight){
    const mapping = {
      'none': '',
      'correct': '#339733',
      'wrong': '#d00811'
    };
    return mapping[highlight];
  }

  return(
    <div className="container">
      <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
        <div className="col-md-4">
          <img src={author.imageUrl} className="authorimage" alt="Author"/>
        </div>
        {/* map over the collection of books and render the titles */}
        <div className="col-md-6 mt-4">
          {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
        </div>
      </div>
    </div>
  );
}
// propTypes validation
Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string
}

function Continue({ show, onContinue }) {
  return(
    <div className="row continue">
      {show ? <div className="col-11">
        <button className="btn btn-primary btn-lg float-right" onClick={onContinue} >Continue</button>
      </div>
      : null }
    </div>
  );
}

// Footer component
function Footer() {
  return(
    <div id="footer" className="row">
      <div className="col-10 offset-1">
        <p><Link to='/add'>Add an author</Link> </p>
        <p className="text-muted credit">All images are from <a href="http://commons.wikipedia.org/wiki/">Wikimedia Commons</a> and are in the public domain</p>
      </div>
    </div>
  );
}

// input the content of the store that's needed for the AuthorQuiz component
function mapStateToProps(state){
  return {
    turnData: state.turnData,
    highlight: state.highlight
  };
}

// mapping events to actions we want to publish to redux store
function mapDispatchToProps(dispatch){
  return{
    onAnswerSelected: (answer) => {
      dispatch({ type: 'ANSWER_SELECTED', answer });
    },
    onContinue: () => {
      dispatch({ type: 'CONTINUE'});
    }
  };
}

// This renders the AuthorQuiz App, all props should be passed here as well as on their components
const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(
  function ({turnData, highlight, onAnswerSelected, onContinue}) {
      return (
        <div className="container-fluid">
          <Hero/>
          <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
          <Continue show={highlight === 'correct'} onContinue={onContinue} />
          <Footer />
        </div>
      );
});

export default AuthorQuiz;
