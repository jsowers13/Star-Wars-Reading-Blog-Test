import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  switch(props.category){
    case "characters":
      return (
    
        <div className="card" style={{width: "18rem"}}>
          <img src="https://www.indiewire.com/wp-content/uploads/2020/10/HUC2-018995_R.jpg?w=780" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.character.name}</h5>
            <p className="card-text">
              Gender: {props.character.gender}
            </p>
            <p className="card-text">
              Hair Color: {props.character.hair_color}
            </p>
            <p className="card-text">
              Eye Color: {props.character.eye_color}
            </p>
            <Link>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            </Link>
            
          </div>
        </div>
      
    );
      
    case "planets":
      return (
    
        <div className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      
    );
      
    case "vehicles":
      return (
    
        <div className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      
    );
  
    default:
      
  }
 
};
