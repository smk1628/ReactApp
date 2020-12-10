import React from 'react'
import Item from '../Item/Item.jsx'
import './List.css'
class List extends React.Component{
    render(){
        let {data} = this.props
        let {deleteComment} = this.props
        return(
            <div id="right" className="col-sm-6 col-md-8 col-lg-8">
                <h3>评论回复:</h3>
                <ul>
                    <p style={{fontSize:'20px',display: data.length>0 ? 'none':'block'}}>暂无评论</p>
                    {
                        data.map((item)=>{
                            return <Item key={item.id} {...item} deleteComment = {deleteComment}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}



export default List