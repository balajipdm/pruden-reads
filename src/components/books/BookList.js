import './BookList.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { truncate } from '../../utils';

const BookList = ({books, openBook}) => {
  return (
    <div className="mdl-grid">
      {
        books.map(book => {
          return (
            <div key={book.id} className="book-cell mdl-cell mdl-cell--3-col" onClick={e => openBook(book.best_book.id)}>
              <div className="mdl-card mdl-shadow--2dp mdl-typography--text-left">
                <div className="float-left icon-sm">
                  <img src={book.best_book.image_url} alt={truncate(book.best_book.title)} />
                </div>
                <div className="float-left ml-1">
                  <h2 className="mdl-typography--title mb-1">{truncate(book.best_book.title)}</h2>
                  <p>
                    By {book.best_book.author.name}
                  </p>
                </div>                            
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  openBook: PropTypes.func.isRequired
};

export default BookList;