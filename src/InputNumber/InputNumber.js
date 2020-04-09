import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from '../Icon/Icon'
import './InputNumber.scss'
import ClassNames from 'classnames'

class Handle extends Component {
  render () {
    const props = this.props
    const { onClick } = props;
    let cls = ClassNames({
      ['react-inputNumber-handle-wrap']: !props.disabled ? true : false,
      ['react-inputNumber-handle-disabled']: props.disabled ? true : false
    });
    return (
      <div className={cls}>
        <a>
          <Icon onClick={e => onClick('up')} name={'xiangshangjiantou'}/>
          <Icon onClick={e => onClick('down')} name={'xiangxiajiantou'}/>
        </a>
      </div>
    );
  }
}

class InputNumber extends Component {
  constructor (props) {
    super(props);
    this.state = {
      innerValue: '',
      hover: false,
      defaultValue: false
    }
  }

  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    size: PropTypes.string,
  };

  static defaultProps = {
    size: 'middle',
    onChange: () => {}
  };

  // 判断是否是受控型组件
  get isControl () {
    return 'value' in this.props;
  }

  //初始化值
  get value () {
    if (this.isControl) {
      return this.props.value.toString();
    } else {
      return this.state.innerValue.toString();
    }
  }

  componentDidMount () {
    // 设置非受控组件状态
    this.setState({
      innerValue: this.props.defaultValue
    });
  }

  //格式化值
  parseInput (num) {
    return Number(num)
  }

  // 增减按钮事件
  changeNumber (data) {
    const _this = this;
    const props = this.props
    const { onChange, value } = props
    if (props.disabled) {
      return;
    }
    const switchs = {
      up: function () {
        let parseValue;
        if (_this.isControl) {
          parseValue = _this.parseInput(value) + 1
        } else {
          parseValue = _this.parseInput(props.defaultValue) + 1
        }
        _this.setState({
          innerValue: parseValue
        })
        onChange(parseValue)
      },
      down: function () {
        let parseValue;
        if (_this.isControl) {
          parseValue = _this.parseInput(value) - 1
        } else {
          parseValue = _this.parseInput(props.defaultValue) - 1
        }
        _this.setState({
          innerValue: parseValue
        })
        onChange(parseValue)
      }
    };
    switchs[data]()
  }

  render () {
    const {hover} = this.state;
    const props = this.props
    const {size, onChange} = props;
    let cls = ClassNames({
      input: true,
      hover: hover,
      [`react-inputNumber`]: true,
      [`react-inputNumber-${size}`]: true
    });
    let regExp = new RegExp('/\\d/');
    if (props.disabled) {
      return (
        <div className={cls}>
          <input disabled/>
          <Handle disabled onClick={e => this.changeNumber(e)}/>
        </div>
      )
    }
    return (
      <div className={cls}>
        <input
        type="text"
        value={this.value}
        onChange={e => {
          const value = e.target.value;
          this.setState({
            innerValue: value
          })
          onChange(value)
        }}
        onFocus={e => {
          this.setState({
            hover: true
          });
      }}
        onBlur={e => {
          this.setState({
            hover: false
          })
      }}/>
        <Handle onClick={e => this.changeNumber(e)}/>
      </div>
    );
  }

}

export default InputNumber;
