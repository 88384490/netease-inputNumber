import React from 'react';
import './App.css';
import InputNumber from './InputNumber/InputNumber'

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      input_one: 0,
      input_two: 0
    }
  }
  render () {
    const {input_one, input_two} = this.state
    return (
      <div className={'App'}>
        <InputNumber value={input_one} onChange={e => {
          this.setState({
            input_one: e
          })
        }}/>
        <InputNumber defaultValue={input_two} onChange={e => {
          this.setState({
            input_two: e
          })
        }} />
      </div>
    );
  }
}

export default App;
