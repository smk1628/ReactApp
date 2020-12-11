import React from 'react'
import axios from 'axios'
class App extends React.Component{
  //https://api.github.com/search/repositories?q=r&sort=stars
  state = {
    requestApi:{
        key_word:'axi',
        name:'',
        html_url:'',
        isLoading:true,
        err:''
    }
  }
  componentDidMount(){
    const URL = `https://api.github.com/search/repositories?q=${this.state.requestApi.key_word}&sort=stars`
    let requestApi = Object.create(this.state.requestApi) //复制一个对象
    //console.log(requestApi === this.state.requestApi)
      axios.get(URL).then(
        (res)=>{
          let {name,html_url} = res.data.items[0]
          requestApi.name = name
          requestApi.html_url = html_url
          requestApi.isLoading = false
          this.setState({requestApi}) 
          console.log(res)
        },
        (err)=>{
          requestApi.err = err.message
          requestApi.isLoading = false
          this.setState({requestApi})
        }
      )
  }
  render(){
    let {key_word,name,html_url,isLoading,err} = this.state.requestApi
    if(isLoading) return <h2>Loading</h2>
    else if(name && html_url && !err) return <h2>搜索关键词【{key_word}】的结果为：<a href={html_url}>{name}</a></h2>
    else return <h2 style={{color:'red'}}>{err}</h2>
    
  }
}
export default App;
