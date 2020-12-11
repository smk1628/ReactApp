import React from 'react'
import './Item.css'
class Item extends React.Component {
    delete = (id) => {
        let { deleteComment } = this.props
        if (window.confirm('确认删除吗？')) {
            deleteComment(id)
        }
    }
    render() {
        let { id, name, comment, time } = this.props
        return (
            <li>
                <h4>{name}说:</h4>
                <p>{comment}</p>
                <span>{time}</span>
                <button onClick={() => this.delete(id)}>删除</button> {/*外部套一个函数，在函数体里执行函数解决函数传参问题*/}
            </li>
        )
    }
}

export default Item