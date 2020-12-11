import React from 'react'
import './Add.css'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
class Add extends React.Component {
    add = () => {
        //获取用户输入
        let name = this.userNameDOM.value
        let comment = this.userCommentDOM.value
        let getNewComment = this.props.getNewComment
        let time = moment().format('YYYY/MM/DD hh:mm:ss')
        //校验数据
        if (!name.trim() || !comment.trim()) {
            alert('名字和内容不能为空！')
            return
        }
        getNewComment({id: uuidv4(),name,comment,time})
        //将数据维护到状态中
        //addComment({id:uuidv4(),name,comment,time})
        this.userNameDOM.value = ''
        this.userCommentDOM.value = ''
    }
    render() {
        return (
            <div id="left" className="col-sm-6 col-md-4 col-lg-4">
                <div className="input-group user">
                    <label >用户名：</label>
                    <input className="form-control" type="text" placeholder="用户名：" ref={input => this.userNameDOM = input} />
                </div>
                <div className="input-group txt">
                    <label >请留言：</label>
                    <textarea className="form-control" cols="30" rows="10" placeholder="请留言" ref={text => this.userCommentDOM = text}></textarea>
                </div>
                <button onClick={this.add} className="btn btn-default pull-left">提交</button>
            </div>
        )
    }
}
export default Add