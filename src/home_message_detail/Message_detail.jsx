import React from 'react'

class Detail extends React.Component{
    state = {
        messageDetail:[
                {id:'1dsdsd21',title:'message01',content:'message01---1111111'},
                {id:'de34fdff',title:'message02',content:'message02---2222222'},
                {id:'423edwrf',title:'message03',content:'message03---3333333'},
                {id:'ewe3dedf',title:'message04',content:'message04---4444444'}
        ]
    }
    render(){
        let {id} = this.props.match.params
        let {messageDetail} = this.state
        let obj = messageDetail.find((item)=>{
            return item.id === id
        })
        if(obj){
            return (
                <ul>
                    <li>ID:{obj.id}</li>
                    <li>Title:{obj.title}</li>
                    <li>Content:{obj.content}</li>
                </ul>
            )
        }else {
            return <h2>暂无数据</h2>
        }
    }
}

export default Detail