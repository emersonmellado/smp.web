import React, { Component } from 'react';
import SmpCore from 'smpcore';
import Timeline from './Timeline';
import logo from './logo.svg';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react';
const heap = require("./heap.json")

let stack = new SmpCore.stack();

class App extends Component {
  state = {
    heap: heap,
    stack: stack
  }
  componentWillMount() {
    this.state.stack.addHeap(this.state.heap);
  }
  getHeap() {
    return JSON.stringify(this.state.heap, undefined, 2)
  }
  handleChange = (e) => {
    // console.log(e.target.value);
    // var value = e.target.value.replace('\\n', '\n');
    // console.log(value);
    this.setState({ heap: JSON.parse(e.target.value) });
    
    // this.state.stack.timeline = [];
    // this.setState({ heap: JSON.parse(e.target.value) });
    this.state.stack.clearTimeline();
    this.state.stack.addHeap(this.state.heap);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title"><img src={logo} className="App-logo" alt="logo" />SMP</h3>
        </header>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              {/* <Segment>1</Segment> */}
              <textarea rows="50" cols="60" value={this.getHeap()} onChange={this.handleChange} />
            </Grid.Column>
            <Grid.Column>
              <Timeline list={this.state.stack.getTimeline()} />
              {/* <Segment>1</Segment>
              <Segment>2</Segment> */}
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>
    );
  }
}

export default App;
