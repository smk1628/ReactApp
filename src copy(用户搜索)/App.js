import React from 'react';
import Search from './components/Search/Search.jsx'
import List from './components/List/List.jsx'
import './App.css'

class App extends React.Component{
    state = {
        user:[],
        isLoading:false,
        isFirst:true,
        error:''
    }
    setAppState = (obj)=>{
        //obj为以下形式
        // {
        //     user:[],
        //     isLoading:false,
        //     isFirst:true,
        //     error:''
        // }
        this.setState(obj)
        //console.log(this.state)
    }
    render(){
        return (
            <div>
                <Search setAppState={this.setAppState}/>
                <List newState = {this.state}/>
            </div>
        )
      }
}
export default App;