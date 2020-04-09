import React, { Component } from "react";
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './Input.scss';
import Icon from '../Icon/Icon'

class Input extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false,
      innerValue: ''
    }
  }
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.string,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    value: '',
    size: 'size-defaul',
    placeholder: ''
  };

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return true
  }

  componentDidMount () {
    this.setState({
      innerValue: this.props.defaultVlaue
    })
  }

  get isControl () {
    return 'value' in this.props
  }

  get value () {
    if (this.isControl) {
      return this.props.value
    } else {
      return this.state.innerValue
    }
  }

  render () {
    const {hover} = this.state;
    const {size, value, placeholder, prefix, suffix} = this.props;
    let cls = classnames({
      input: true,
      hover: hover,
      [`react-ui-input--${size}`]: true,
      'react-ui-input': true
    });
    return (
      <div className={cls}>
        <Icon name={prefix}/>
        <input type="text" placeholder={placeholder} onFocus={e => {
          this.setState({
            hover: false
          })
        }} onBlur={e => {
          this.setState({
            hover: true
          })
        }}/>
        <Icon name={suffix}/>
      </div>
    );
  }
}

export default Input;