import React from 'react';
import Message from '../home_message/message.jsx'
import News from '../home_news/News.jsx' 
import {NavLink,Switch,Redirect,Route} from 'react-router-dom'
class Home extends React.Component{ 
    render(){
     
        return (
          <div>
              <ul className="nav nav-tabs">
                <h2>Home组件的内容</h2>
                <li>
                  <NavLink className="list-group-item" to="/home/news" >News</NavLink> {/**replace 替换栈 */}
                </li>
                <li>
                  <NavLink className="list-group-item " to="/home/message" >Message</NavLink>
                </li>
              </ul>
              <Switch>
                  <Route path="/home/news" component={News}/>
                  <Route path="/home/message" component={Message}/>
                  <Redirect to="/home/news"/>
              </Switch>
          </div>
        )
      }
}
export default Home;