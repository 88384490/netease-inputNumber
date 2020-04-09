import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../font-icon/iconfont.css'

class Icon extends Component {
  // 声明里面的组件类型
  static propTypes = {
    // 组件的规范
    name: PropTypes.string
  };

  // 设置组件的默认属性
  static defaultProps = {
    name: 'aaa'
  };

  render () {
    const { name, ...reset }  = this.props;
    return (
      <div>
        <i {...reset} className={`icon iconfont icon-${name}`}/>
      </div>
    );
  }
}

export default Icon;
