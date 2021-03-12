import React from 'react';

const Panier = ({ objet, onVente}) => {
    return (
        <li className="my-1"> <button className="btn btn-danger" onClick={() => { onVente(objet.id)} }>x</button> | {objet.nom}  </li>
    );
}

export default Panier;