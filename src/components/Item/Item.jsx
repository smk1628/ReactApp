import React from 'react'
import './Item.css'

class Item extends React.Component{
    render(){
        let{login,avatar_url,html_url} = this.props
        return (
            <li className="item">
                <a href={html_url}>
                    <img src={avatar_url} alt='pic'/>
                    <span className="name">{login}</span>
                </a>
            </li>
            
        )
    }
}

export default Item