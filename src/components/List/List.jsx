import React from 'react'
import Item from '../Item/Item.jsx'
import './List.css'
class List extends React.Component {
    state = {
        comments: [
            { id: 'fdb73754-0af6-4d9a-ab61-3154c970f07d', name: '张三', comment: 'ReactJs太难了，学不会啊', time: '1970/11/10 00:00:00' },
            { id: '8fda13db-9346-4161-9bf9-49a3ae6d1899', name: '李四', comment: 'ReactJs太难了，学不会啊', time: '1970/11/10 00:00:00' },
            { id: '23fdbd7a-245d-4c45-aec6-ad7859e13f71', name: '王五', comment: 'ReactJs太难了，学不会啊', time: '1970/11/10 00:00:00' },
        ]
    }
    deleteComment = (id) => {
        let comments = [...this.state.comments]
        comments = comments.filter((item) => {
            return item.id !== id //过滤指定id的item
        })
        this.setState({ comments })
    }
    UNSAFE_componentWillReceiveProps({ newComment }) { //进行addComment操作
        //复制数据，不能直接动state里的数据
        let comments = [...this.state.comments]
        //更新新的数据到复制的数据
        comments.unshift(newComment)
        //console.log(comments)
        //将更新后的数据塞回state
        this.setState({ comments })
    }
    render() {
        let { comments } = this.state
        let deleteComment = this.deleteComment
        return (
            <div id="right" className="col-sm-6 col-md-8 col-lg-8">
                <h3>评论回复:</h3>
                <ul>
                    <p style={{ fontSize: '20px', display: comments.length > 0 ? 'none' : 'block' }}>暂无评论</p>
                    {
                        comments.map((item) => {
                            return <Item key={item.id} {...item} deleteComment={deleteComment} />
                        })
                    }
                </ul>
            </div>
        )
    }
}



export default List