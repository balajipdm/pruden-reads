import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchBooks, fetchBook, closeBook } from '../../actions';
import BookSearch from './BookSearch';
import BookShow from './BookShow';

class BooksModule extends Component {
  
  handleSearchBooks = (query) => {
    this.props.searchBooks(query);
  }

  handleOpenBook = (bookId) => {
    this.props.fetchBook(bookId);
  }

  handleCloseBook = () => {
    this.props.closeBook();
  }

  render() {
    const {books, selectedBook, loading, error} = this.props;
    return (
      <div className="mdl-grid">
        <div className="mdl-layout-spacer"></div>
        <div className="mdl-cell mdl-cell--10-col">
        {loading &&
          <p className="mdl-typography--text-center mdl-typography--font-bold">Fetching Data...</p>
        }
        {error &&
          <p className="color-text--red mdl-typography--text-center mdl-typography--font-bold">{error}</p>
        }
        {selectedBook && !error ? (
            <BookShow
              book={selectedBook}
              closeBook={this.handleCloseBook}
            />
          ) : (
            <BookSearch
              searchBooks={this.handleSearchBooks}
              books={books}
              openBook={this.handleOpenBook}
            />
          )}   
        </div>
        <div className="mdl-layout-spacer"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: Object.values(state.books.list),
    selectedBook: state.books.selected,
    loading: state.books.loading,
    error: state.books.error
  };
};

export default connect(mapStateToProps, { searchBooks, fetchBook, closeBook })(BooksModule);