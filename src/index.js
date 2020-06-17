import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
// import * as serviceWorker from './serviceWorker';
import { unregister } from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/mark-twain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn','Life on the Mississippi', 'Roughing It']
  },{
    name: "Stephen King",
    imageUrl: 'images/stephen-king.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['IT', 'The Shining', 'Pet Cemetary']
  },{
    name: "J.K. Rowling",
    imageUrl: 'images/jk-rowling.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Harry Potter', 'The Silkworm']
  },{
    name: "Charles Dickens",
    imageUrl: 'images/charles-dickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Oliver Twist', 'David Copperfield']
  },{
    name: "George Orwell",
    imageUrl: 'images/george-orwell.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Animal Farm', 'Burmese Days']
  },{
    name: "J.R.R. Tolkien",
    imageUrl: 'images/Tolkien.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Lord of the Rings', 'The Children of Hurin']
  },{
    name: "George R.R. Martin",
    imageUrl: 'images/george-martin.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['A Game of Thrones', 'A Storm of Swords']
  },{
    name: "Chinua Achebe",
    imageUrl: 'images/chinua-achebe.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['A Man of the People', 'Things Fall Apart']
  },{
    name: "Wole Soyinka",
    imageUrl: 'images/wole-soyinka.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Trials of Brother Jero', 'A Shuttle in the Crypt']
  },{
    name: "William Shakespeare",
    imageUrl: 'images/william-shakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Macbeth', 'Othello', 'Romeo and Juliet']
  }
];

function getTurnData(authors){
  //concatunate author books
  const allBooks = authors.reduce(function (p, c, i){
    return p.concat(c.books);
  }, []);
  //shuffle books with underscore
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
        author.books.some((title) =>
        title === answer ))
  }
}

// Redux Reducer function
function reducer(state ={ authors, turnData: getTurnData(authors), highlight: '' }, 
action){
    switch (action.type) {
      case 'ANSWER_SELECTED':
        const isCorrect = state.turnData.author.books.some((book) => book === action.answer); 
        return Object.assign(
          {}, state, {
            highlight: isCorrect ? 'correct' : 'wrong'
          });
      case 'CONTINUE':
        return Object.assign({}, state, {
          highlight: '',
          turnData: getTurnData(state.authors)
        });
      default: return state;
    }
}

let store = Redux.createStore(reducer);

function AddAuthorForm({match}){
  return <div>
    <h1>Add Author</h1>
    <p>{JSON.stringify(match)}</p>
  </div>;
}

function App() {
  return <ReactRedux.Provider store={store}>
    <AuthorQuiz />
  </ReactRedux.Provider>;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/add" component={AddAuthorForm} />
      </React.Fragment>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
