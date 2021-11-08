import './NewPost.css'
import React from 'react';
import axios from 'axios';




class NewPost extends React.Component {
    state = {
        title: '',
        content:'',
        author: ''
    }

    deletePostHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post(` /posts/`, data)
            .then(response => {
                console.log(response)
            })
    }
    render() { 
        return (
            <div className="cont">
            <h1>Add a Post</h1>
         
            <label>Title</label>
            <input 
                className="input"   
                onChange={(event)=>event.target.value}  
                type="text"
                value={this.state.title} />
            <label>Content</label>
            <textarea 
                className="input c"  
                onChange={(event)=>event.target.value}
                type="text"
                value={this.state.content}
                />
            <label>Author</label>
            <select 
                className="input " 
                onChange={(event)=>event.target.value} 
                value={this.state.author} 
                type="text">
                    <option value="Gerald">Gerald</option>
                    <option value="Crisom">Crimson</option>
            </select>
            <div>
                <button className="btn1" onClick={this.deletePostHandler}>Add Post</button>
            </div>
        </div>
        );
    }
}
 
export default NewPost;