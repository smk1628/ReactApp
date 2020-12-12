import React from 'react';
import './App.css'
import { NavLink,Switch,Route,Redirect } from "react-router-dom";
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
class App extends React.Component{    
    render(){
        return (
            <div id="container">
                <div className="page-header">
                    <h1>React Router Demo</h1>
                </div>
                <div className="col-md-9">
                    <ul className="list-group col-md-4">
                        <NavLink to="/home" className="list-group-item" activeClassName="demo"> Home</NavLink> {/*activeClassName="" 设置active样式 */}
                        <NavLink to="/about" className="list-group-item" activeClassName="demo">About</NavLink>
                    </ul>
                    <div className="text col-md-8">
                        <Switch>
                            <Route path="/home" component={Home}/> {/**exact 精准匹配 */}
                            <Route path="/about" component={About}/>
                            
                            <Redirect to="/home"/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
      }
}
export default App;