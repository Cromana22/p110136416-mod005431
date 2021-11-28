import React from "react";
import image from "./images/cupcake.png";

function HomepageCard(props) {

    let { blogs } = props
    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    blogs = shuffle(blogs);

    return (
    <div>
        {blogs.map((blog) => (
            <div className="col s12 m4" key={blog.id}>
                <div className="card medium hoverable yellow lighten-4">
                    <div className="card-content deep-purple-text">
                        <div className="card-title"><strong>{blog.title}</strong></div>
                        <div className="center-align"><img src={image} alt="" width="100px" /></div>
                        <p>{blog.content.substring(0,200)}...</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}
    
export default HomepageCard