import './BookSearch.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookList from './BookList';

class BookSearch extends Component {
  
  state = { value: '' };

  handleOnChange = (e) => {
    this.setState({value: e.target.value});    
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchBooks(this.state.value);
  }

  render() {
    const {openBook, books} = this.props;
    return (
      <div className="book-search mdl-typography--text-center">
        <form onSubmit={this.handleSubmit}>
          <div className="mdl-textfield mdl-js-textfield">
            <input 
              className="mdl-textfield__input" 
              placeholder="Search Books By Name" 
              type="text"
              onChange={this.handleOnChange}
              value={this.state.value} />              
          </div>
          <button type="submit" className="mdl-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect ml-2">
            <i className="material-icons mdl-textfield__label__icon">search</i>
          </button>
        </form>
        <BookList openBook={bookId => openBook(bookId)} books={books} />          
      </div>
    );
  }
}

BookSearch.propTypes = {
  searchBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  openBook: PropTypes.func.isRequired
};

export default BookSearch;