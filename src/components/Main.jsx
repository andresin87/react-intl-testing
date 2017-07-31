
import React from 'react';

import BookStore from './BookStore';

require('normalize.css/normalize.css');
require('../styles/App.css');

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <BookStore />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
