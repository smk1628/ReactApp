import React from 'react'
import './List.css'
import Item from '../Item/Item.jsx'
class List extends React.Component{
    render(){
        let {newState} = this.props
        if(newState.isFirst){
            return <h2>请输入关键字以搜索....</h2>
        }else if(newState.isLoading){
            return <h2>Loading....</h2>
        }else if(newState.error){
            return <h2 className='err'>{newState.error}</h2>
        }else{
            return (
                <ul id="list">
                    {
                        newState.user.map((item)=>{
                            return <Item key={item.id} {...item}/>
                        })
                    }
                </ul>
            )
        }
    }
}

export default List