import React from 'react'
import Add from './components/Add/Add.jsx'
import List from './components/List/List.jsx'
import './App.css'
class App extends React.Component{
  state = {
    comments:[
      {id:'fdb73754-0af6-4d9a-ab61-3154c970f07d',name:'张三',comment:'ReactJs太难了，学不会啊',time:'1970/11/10 00:00:00'},
      {id:'8fda13db-9346-4161-9bf9-49a3ae6d1899',name:'李四',comment:'ReactJs太难了，学不会啊',time:'1970/11/10 00:00:00'},
      {id:'23fdbd7a-245d-4c45-aec6-ad7859e13f71',name:'王五',comment:'ReactJs太难了，学不会啊',time:'1970/11/10 00:00:00'},
    ]
  }
  addComment = (newCommentObj)=>{
    //console.log(newCommentObj)
    //复制数据，不能直接动state里的数据
    let comments = [...this.state.comments]
    //更新新的数据到复制的数据
    comments.unshift(newCommentObj)
    //将更新后的数据塞回state
    this.setState({comments})
  }
  deleteComment = (id)=>{
    let comments = [...this.state.comments]
    comments = comments.filter((item)=>{
      return item.id !== id //过滤指定id的item
    })

    this.setState({comments})
  }
  render(){
    let {comments} = this.state
    return (
      <div>
        <header>
            <h1>请发表对React的评论</h1>
        </header>
        <div id="container">
            <div className="row">
                <Add addComment={this.addComment}/>
                <List data = {comments} deleteComment={this.deleteComment}/>
            </div>
        </div>
    </div>
    )
  }
}
export default App;
