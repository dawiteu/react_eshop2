import React from 'react';
import './Produits.css';

const Produits = ({ details, onAchats}) => {
    
        //const detail = this.props.details; 
        const link = "./img/"+details.id+".png";
        const div = "div"+details.id;

        return (
            <li className="card w-100 m-1 p-2 d-flex flex-column">
                <div className="text-center">
                    <img src={link} alt={details.nom} />
                </div>  
                <div className={`d-flex flex-column m-2 p-2 ${details.stock === 1 ? 'bg-orange' : details.stock === 0 ? 'bg-red' : ''}`} id={div}>
                    <span className="font-weight-bold my-2 h2">{details.nom}</span>
                    <span className="my-2">Prix: {details.prix} &euro; </span>
                    <span className="my-2">Stock disponible: {details.stock} unités</span>
                    <button className="btn btn-success" onClick={() => {onAchats(details.id)}}>Acheter</button> 
                </div>
            </li> 
        );
    
}

export default Produits;