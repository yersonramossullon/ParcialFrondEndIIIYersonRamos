import React from "react";


function Card({ data }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
      <h3>Elige a tu animal Favorito:</h3>
      <p><strong>Nombre:</strong> {data.name}</p>
      <p><strong>Animal Favorito:</strong> {data.favoriteAnimal}</p>
      <p><strong>País:</strong> {data.country}</p>
    </div>
  );
}


export default Card;