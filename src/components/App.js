import React from 'react';

import Header from './Header';
import BooksModule from './books/BooksModule';

const App = () => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header is-small-screen">
      <Header />
      <main className="mdl-layout__content">
        <BooksModule />
      </main>
    </div>
  );
};

export default App;