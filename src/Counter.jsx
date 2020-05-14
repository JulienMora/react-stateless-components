import React, { useState } from "react";

const Counter = props => {
  // Methode sale :
  // const tableau = useState(1);
  // const compteur = tableau[0];
  // const setCompteur = tableau[1];
  // Methode propre :
  const [compteur, setCompteur] = useState(1);
  const handleChange = () => {
    setCompteur(compteur + 1);
  };
  return (
    <>
      {compteur}
      <button onClick={() => handleChange()}>Increment</button>
    </>
  );
};

export default Counter;
