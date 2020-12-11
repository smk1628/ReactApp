import React from 'react'
import Add from './components/Add/Add.jsx'
import List from './components/List/List.jsx'
import './App.css'
class App extends React.Component {
  state = {
    newComment: {}
  }
  getNewComment = (newComment) => {
    this.setState({ newComment })
  }
  render() {
    return (
      <div>
        <header>
          <h1>请发表对React的评论</h1>
        </header>
        <div id="container">
          <div className="row">
            <Add getNewComment={this.getNewComment} />
            <List newComment={this.state.newComment} />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
