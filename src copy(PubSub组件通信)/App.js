import React from 'react';
import Search from './components/Search/Search.jsx'
import List from './components/List/List.jsx'
import './App.css'

class App extends React.Component{    
    render(){
        return (
            <div>
                <Search/>
                <List/>
            </div>
        )
      }
}
export default App;