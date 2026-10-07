import { useState } from "react";
import krishna from '../krishna.png';
function LikesDislikes(){
    const[Likes,setLikes]=useState(0);
    const[Dislikes,setDislikes]=useState(0);
    return(
        <div>
            <h1>Profile Component</h1>
            <img src={krishna}/> <br/>
            <button>Likes</button>&nbsp;&nbps;&nbps;
            <button>Dislikes</button>
            <p>Likes :{}.Dislikes :{}</p>
        </div>

    )

    
}
export default LikesDislikes;