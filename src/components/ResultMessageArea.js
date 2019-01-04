import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class ResultMessageArea extends React.PureComponent {
  static propTypes = {
    userName: PropTypes.string,
    greetingText: PropTypes.string
  };

  render() {
    const {greetingText, userName} = this.props;
    const text = `${greetingText} ${userName}${userName && '.'}`;

    return (
      <div id="message">
        <input
          value={text}
          type="text"
          onKeyDown={ev => {
            ev.preventDefault();
          }}
          readOnly
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {greetingText, userName} = state;

  return {
    greetingText,
    userName
  };
};

export default connect(mapStateToProps)(ResultMessageArea);
