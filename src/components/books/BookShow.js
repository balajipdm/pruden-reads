import './BookShow.scss';

import React from 'react';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

const renderAuthor = (author) => {
  if(Array.isArray(author)) {
    return author.map(a => a.name).join(',');
  } else {
    return author.name;
  }
};

const BookShow = ({book, closeBook}) => {
  return (
    <div className="mdl-grid book-details">
      <div className="mdl-cell mdl-cell--2-col mdl-typography--text-center">
        <button className="mdl-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect mb-1" onClick={e => closeBook()}>
          Back
        </button>
        <div className="icon-bg mb-2">
          <img src={book.image_url} alt={book.title} />
        </div>
        <button className="mdl-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
          Want to Read
        </button>
        <div className="mt-1 mb-2">
          <p className="mb-0">Rate this book</p>
          <StarRatings
            starRatedColor="grey"
            starDimension="25px"
            starSpacing="0px"
          />
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          Open Preview
        </button>
      </div>
      <div className="mdl-cell mdl-cell--10-col">
        <h1 className="mdl-typography--title mdl-typography--font-bold mb-1">{book.title}</h1>
        <h2 className="mdl-typography--title mb-1">By {renderAuthor(book.authors.author)}</h2>
        <div className="mdl-typography--font-bold mb-1">
          <span className="display-rating">
            <StarRatings
              rating={Number(book.average_rating)}
              starRatedColor="red"
              starDimension="25px"
              starSpacing="0px"
            />
            {book.average_rating}
          </span>
          <span className="color-text--grey">&nbsp;·&nbsp;</span>
          <span className="color-text--teal">
            Rating Details
          </span>
          <span className="color-text--grey">&nbsp;·&nbsp;</span>
          <span className="color-text--teal">
            {book.ratings_count} Ratings
          </span>
          <span className="color-text--grey">&nbsp;·&nbsp;</span>
          <span className="color-text--teal">
            {book.text_reviews_count} Reviews
          </span>
        </div>
        <p className="mb-2">{book.description}</p>
        <hr className="mb-2" />
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          Get a Copy
        </button>
      </div>
    </div>
  );
};

BookShow.propTypes = {
  book: PropTypes.object.isRequired,
  closeBook: PropTypes.func.isRequired
};

export default BookShow;