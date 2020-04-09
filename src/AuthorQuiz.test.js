import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'Enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ['The Shining', 'IT', 'The Adventures of Huckleberry Finn', 'Lord of the Rings'],
    author: {
      name: 'Mark Twain',
      imageUrl: 'images/mark-twain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn','Life on the Mississippi', 'Roughing It']
    },
  },
  highlight: 'none'
};

describe("Author Quiz", () =>{
  it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div);
  });  

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(()=> {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=> {}} />);
    });

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    });
  });

  describe('When the wrong answer has been selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={()=>{}} />
      )
    });
    
    it('shoukd have a red background color', () => {
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('#d00811');
    });
  });

  describe('When the correct answer has been selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={()=>{}} />
      )
    });
    
    it('shoukd have a green background color', () => {
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('#339733');
    });
  });

  describe("When the first answer is selected", ()=>{
    let wrapper;
    const handleAnswerSelected = jest.fn();

    beforeAll(()=>{
      wrapper = mount(
        <AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />
      );
      wrapper.find('.answer').first().simulate('click');
    });

    it("onAnswerSelected shoulb be called", ()=>{
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should receive The Shining", ()=>{
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
    });

  });
  
});
