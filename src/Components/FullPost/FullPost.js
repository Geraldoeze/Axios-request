import './full.css'
import React from 'react'
import axios from 'axios';



class FullPost extends React.Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate(){
        if(this.props.id){
            //this stops making infinite request in the background
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get(`/posts/` + this.props.id) // or use ${this.props.id}
                .then(res => {
                    //console.log(res.data)
                    this.setState({loadedPost: res.dataS})
                  })
            }
        
        }
    }

    deletePostHandler = () => {
        axios.get(`/posts/` + this.props.id) // or use ${this.props.id}
    }


    render() { 
        let post = <p style={{textAlign: 'center'}}> Please select a Post</p>;
        if(this.props.id){<p style={{textAlign: 'center'}}>Loading...</p>}
        if(this.state.loadedPost) {
        post = (
            <div className="new">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div>
                    <button className="btn" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>
        )
        }
        return post;
    }
}
 
export default FullPost;