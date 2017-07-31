/**
 * Company: Redpoints.
 * Website: www.redpoints.com
 * Autor: alucas
 * Date: 30/07/2017
 * Project: react-intl-testing
 * Description: The description here
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

class BookStore extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage id="detail.toogle" />
        </h1>
        <h6>
          <FormattedMessage id="detail.purchase" />
        </h6>
        <p>
          <FormattedMessage id="detail.reviewsHeading" />
        </p>
      </div>
    );
  }
}

BookStore.defaultProps = {
};

export default BookStore;
