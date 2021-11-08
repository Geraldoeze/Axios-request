import './post.css'

const Post = (props) => {
    return ( 
        <article className="let" onClick={props.clicked}>
            <h1 className="head" >{props.title}</h1>
            <div>
             <p>{props.author}</p>
            </div> 
        </article>
     );
}
 
export default Post;