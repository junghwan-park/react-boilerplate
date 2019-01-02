/**
 * @fileoverview User name and greeting message input area component.
 * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setUserName} from '../actions/userName';
import {setGreetingText} from '../actions/greetingText';

class InputArea extends React.PureComponent {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    greetingText: PropTypes.string.isRequired,
    setUserName: PropTypes.func.isRequired,
    setGreetingText: PropTypes.func.isRequired
  };

  state = {userName: '', greetingText: ''};

  componentDidMount() {
    const {greetingText} = this.props;

    this.setState({greetingText: greetingText});
  }

  onChangeInput(ev, stateKey) {
    this.setState({[stateKey]: ev.target.value});
  }

  onClickApplyButton() {
    const {greetingText, userName} = this.state;

    this.props.setUserName(userName);
    this.props.setGreetingText(greetingText);
  }

  render() {
    const {userName, greetingText} = this.state;

    return (
      <div>
        User name{' '}
        <input
          type="text"
          value={userName}
          onChange={ev => {
            this.onChangeInput(ev, 'userName');
          }}
        />
        <br />
        Greeting:){' '}
        <input
          type="text"
          value={greetingText}
          onChange={ev => {
            this.onChangeInput(ev, 'greetingText');
          }}
        />
        <br />
        <button type="button" className="button" onClick={this.onClickApplyButton.bind(this)}>
          적용
        </button>
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

const mapDispatchToProps = {
  setUserName,
  setGreetingText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputArea);
