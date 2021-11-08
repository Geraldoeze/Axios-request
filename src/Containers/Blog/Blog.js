import React from "react";
import Post from "../../Components/Post/Post";
import './Blog.css'
import NewPost from "../../Components/NewPost/NewPost";
import FullPost from "../../Components/FullPost/FullPost";
import axios from "axios";

class Blog extends React.Component {
     state = {
         posts: [],
         selectedPostId: null, 
         error : false
    }


     componentDidMount(){
         axios.get(`http://jsonplaceholder.typicode.com/posts`)
             .then( response => {
                 const posts = response.data.slice(0, 4);
                 const updatedPosts = posts.map(post => {
                     return {
                         ...post,
                         author: "Gerald"
                     }
                 });
                 this.setState({posts: updatedPosts})
             })
             .catch(error => {
                // console.log(error)
                this.setState({error: true})
             })
     }

     postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
     }

    render() { 
        let posts = <p style={{textAlign:"center"}}>Something went wrong!</p>
        if (!this.state.error) {
         posts = this.state.posts.map( post => {
             return <Post 
             title={post.title} 
             key={post.id} 
             author={post.author}
             clicked = {() => this.postSelectedHandler(post.id)}/>
            })
        }
        return (
            <div className="blog">
                <section className="post">
                    {posts}
                </section>
                <section className="fullpost">
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section className="newpost">
                    <NewPost />
                </section>
            </div>
        )
    }    
}
 
export default Blog;