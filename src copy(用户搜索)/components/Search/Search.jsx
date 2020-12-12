import React from 'react'
import './Search.css'
import axios from 'axios'
class Search extends React.Component{
    myRef = React.createRef()
    getSearchData = ()=>{
        //获取父组件的setAppState()
        let {setAppState }= this.props
        let obj = {
            user:[],
            isLoading:true,
            isFirst:false,
            error:''
        }
        setAppState(obj)
        //获取用户输入
        let inputValue = this.myRef.current.value
        //alert(inputValue)
        //发送get请求
        const URL = `https://api.github.com/search/users?q=${inputValue}`
        axios.get(URL)
        .then(
            (res)=>{
                obj.user = res.data.items.map((item)=>{return {login:item.login,id:item.id,avatar_url:item.avatar_url,html_url:item.html_url}})
                //console.log(obj)
                obj.isLoading = false
                setAppState(obj)

            }
        )
        .catch(
            (err)=>{
                obj.isLoading = false
                obj.error = err.message
                //console.log(obj)
                setAppState(obj)
            }
        )

    }
    render(){
        return (
            <header>
                <h1 className="mui-title">用户搜索</h1>
                <input type="text" placeholder="key_word" ref={this.myRef}/>
                <button type="button" onClick={this.getSearchData}>Search</button>
            </header>
        )
    }
}
export default Search