import React, { Component } from "react";
import PropTypes from 'prop-types';
import Icon from "../Icon/Icon";
import './Index.scss'

class Button extends Component {
  static propType = {
    icon: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    icon: 'dianzan',
    type: 'primary'
  };

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    const {icon, children, type} = this.props;
    return (
      <div>
        <button className={`react-ui_btn react-ui_btn--${type}`}>
          <Icon name={icon}/>
          {children}
        </button>
      </div>
    );
  }
}

export default Button;