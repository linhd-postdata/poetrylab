import React, { Component } from 'react'

import Main from './components/Main'
import AddForm from './components/AddForm'


class App extends Component {
  state = {
    poems: [],
    current: -1
  }

  constructor(props) {
    super(props);
    this.addPoem = this.addPoem.bind(this);
    this.changeCurrentPoem = this.changeCurrentPoem.bind(this);
    this.updatePoem = this.updatePoem.bind(this);
  }

  addPoem(title, text) {
    this.setState({
      poems: [...this.state.poems, {title, text, analysis: {}}],
      current: this.state.poems.length,
    })
  }

  updatePoem(poemProps) {
    const { poems, current } = this.state;
    poems[current] = poemProps;
    this.setState({ poems });
    this.forceUpdate();
  }

  changeCurrentPoem(index) {
    this.setState({
      current: index,
    })
  }

  render() {
    return (
      <div>
        <Main {...this.state}
          changeCurrent={this.changeCurrentPoem}
          updatePoem={this.updatePoem}
        />
        <AddForm onSubmit={this.addPoem} />
      </div>
    );
  }
}
export default App;