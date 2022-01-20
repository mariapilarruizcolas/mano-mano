import React from 'react';
import './Notice.css';

function Notice (){
  return(
  <div className="Notice">
    <h2>Chauffe Eau Electrique Extra Plat WTS100 Blanc 179 L WATERSLIM avec Kit de raccordement</h2>
    <div >
      <img className='Image' src='../img/chauffe-eau.jpg' alt='chauffe-eau' />
    </div>
    <h4>Détails du produit</h4>
    <div className="Produits">
      <h5>Caracteristiques</h5>
      
      <p>Mode de pose : Mural</p>
      <p>Puissance de chauffe: 2kw</p>
      <p>Hauteur: 35 cm</p>
      <p>Profondeur : 20 cm</p>
      <p>Type de résistance: Blindé (en contact direct avec l'eau)</p>
      <p> Temps de chauffe: 3 heure(s)</p>
      <p>Poids: 180kg</p>
    </div>
    <a href="https://www.waterslim.com/wp-content/uploads/2018/10/Fiche-technique-Waterslim.pdf" target="_blank" >Documentation téchnique</a>
    <a href="https://www.youtube.com/watch?v=DWtXf-Jolbc" target="_blank" >Tuto montage</a>
    <a href="https://www.devis67.com" target="_blank" >Besoin d'un artisan?</a>

  </div>
  )
}
export default Notice;