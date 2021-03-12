import React, { useState } from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import Produits from './component/Produits'; 
import Panier from './component/Panier'; 

const App = () => {
    const [argent, setArgent] = useState(20); 
    const [panier, setPanier] = useState([]); 

    const [produits, setProduits] = useState([
      {id: 1, nom: "Coca-Cola", stock: 5, prix: 1.5},  
      {id: 2, nom: "Fanta", stock: 2, prix: 2},   
      {id: 3, nom: "Lipton Iced Tea", stock: 3, prix: 1} 
    ])

    // handler Achats quand tu achete un produit. 
    const handAchat = (id) => {
      const Updateproduits = [...produits];  
      let updateArgent = argent;
      let updatePanier = panier;  
      const idd = Updateproduits.findIndex((produit) => produit.id === id);  
      const leProduit = Updateproduits[idd]; 

      let stock = leProduit.stock;
      let prix = leProduit.prix; 

      if((stock > 0) && (updateArgent > leProduit.prix)){ 
        updatePanier.push(leProduit);
        updateArgent -= prix; 
        leProduit.stock -= 1;
        setProduits(Updateproduits);  
        setArgent(updateArgent); 
        setPanier(updatePanier); 
      }
    }

    const handVente = (id) => {

      const Updateproduits = [...produits]; 
      let updateArgent = argent; 
      let updatePanier = panier;  
      const object = updatePanier[id];
      let idProd = Updateproduits.findIndex((prod) => prod.id === object.id); 
      
      Updateproduits[idProd].stock += 1; 
      updateArgent += object.prix;
      updatePanier.splice(id, 1); 

      setProduits(Updateproduits); 
      setArgent(updateArgent); 
      setPanier(updatePanier);  
    } 


    let panierLength = panier.length;

    return ( 
      <div className="container">
        <h2>Votre argent: {argent} &euro; </h2>
        <ul className="d-flex m-0">  
        { produits.map((produit, i) => <Produits key={i} details={produit} onAchats={handAchat} /> )}
        </ul>
        <p className="h2">Votre panier:</p>
        <ul className="panier">
          {panierLength > 0 ? panier.map((prod, i) => <Panier key={i} objet={prod} onVente={() =>{ handVente(i) } } />) : "le panier est vide" }
        </ul>
      </div>
  );
}

export default App;
