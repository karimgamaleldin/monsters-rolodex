import { Component } from "react";
import './card.styles.css';

class Card extends Component{
    render(){
        const {name , email , id} = this.props.monster;
        return(
            <div>
                <div className = 'card-container'>
                  <img alt={`Monster ${name}`} src = {`https://robohash.org/${id}?set=set2&size=180x180`}/>
                  <h2>{name}</h2>
                  <p>{email}</p>
                </div>
            </div>
        );
    }
} 
export default Card;