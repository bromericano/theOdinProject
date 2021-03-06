import Counter from './components/Counter.js'
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mount: true
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
        {this.state.mount ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
