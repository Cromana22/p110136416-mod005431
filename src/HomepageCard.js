import React from "react";
import { Link } from "react-router-dom";

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
    
    let selection = [];
    selection[0] = blogs[0];
    selection[1] = blogs[1];
    selection[2] = blogs[2];

    return (
    <div>
        {selection.map((blog) => (
            <div className="col s12 m4" key={blog.id}>
                <Link to={"/blog/"+blog.id}>
                    <div className="card medium hoverable yellow lighten-4">
                        <div className="card-content deep-purple-text">
                            <div className="card-title"><strong>{blog.title}</strong></div>
                            <div className="center-align"><img src={blog.image} alt="" className="responsive-img" /></div>
                            <p>{blog.content.substring(0,150)}...</p>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
    )
}
    
export default HomepageCard