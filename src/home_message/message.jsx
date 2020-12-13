import React from 'react'
import './message.css'
import {NavLink, Route} from 'react-router-dom'
import Detail from '../home_message_detail/Message_detail.jsx'
class Message extends React.Component{
    state = {
        messageArr:[]
    }
    componentDidMount(){  
        //console.log(this) 
        setTimeout(()=>{    //模拟发送ajax请求数据
            this.setState({
                messageArr:[
                    {id:'1dsdsd21',title:'message01'},
                    {id:'de34fdff',title:'message02'},
                    {id:'423edwrf',title:'message03'},
                    {id:'ewe3dedf',title:'message04'}
                ]
            })
        },1000)
    }
    pushShow = (id)=>{
        //向浏览器的历史记录push一个路径
        this.props.history.push(`/home/message/detail/${id}`)
    }
    replaceShow = (id)=>{
        //向浏览器的历史记录replace一个路径
        this.props.history.replace(`/home/message/detail/${id}`)
    }
    back = ()=>{
        if(this.props.history.location.pathname === "/home/message") {
            return
        }
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    render(){
        let {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((item)=>{
                            return(
                                <li key={item.id}>
                                    <NavLink to={`/home/message/detail/${item.id}`}>{item.title}</NavLink>
                                    <button onClick={()=>{this.pushShow(item.id)}} type="button">push查看详情</button>
                                    <button onClick={()=>{this.replaceShow(item.id)}} type="button">replace查看详情</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.back} type="button">返回</button>
                <button onClick={this.forward} type="button">前进</button>
                <hr/>
                <Route path="/home/message/detail/:id" component={Detail}/>
            </div>
        )
    }
}
export default Message