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
  }

  addPoem(title, text) {
    this.setState({
      poems: [...this.state.poems, {title, text, analysis: null}],
      current: this.state.poems.length,
    })
  }

  changeCurrentPoem(index) {
    this.setState({
      current: index,
    })
  }

  render() {
    return (
      <div>
        <Main {...this.state} changeCurrent={this.changeCurrentPoem} />
        <AddForm onSubmit={this.addPoem} />
      </div>
    );
  }
}
export default App;