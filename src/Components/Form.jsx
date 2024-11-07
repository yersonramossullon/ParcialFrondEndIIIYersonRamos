import React, { useState } from "react";

import Card from "./Card";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    favoriteAnimal: "",
    country: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(""); //Limpiar 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name.trim().length < 3 || formData.name.trim() !== formData.name) {
      setError("Por favor verifica que la información sea correcta");
      return;
    }
    
    if (formData.favoriteAnimal.length < 6) {
      setError("Por favor verifica que la información sea correcta");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Animal Favorito:</label>
          <input
            type="text"
            name="favoriteAnimal"
            value={formData.favoriteAnimal}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>País:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && <Card data={formData} />}
    </div>
  );
}

export default Form;
