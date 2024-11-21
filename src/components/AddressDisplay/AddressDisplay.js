import React from "react";
import "../../styles/AddressDisplay.css";

const AddressDisplay = ({ address }) => {
  return (
    <div className="address-display-container">
      <h2>Informações do Endereço</h2>
      <p><strong>Logradouro:</strong> {address.logradouro || "Não informado"}</p>
      <p><strong>Bairro:</strong> {address.bairro || "Não informado"}</p>
      <p><strong>Cidade:</strong> {address.localidade || "Não informado"}</p>
      <p><strong>Estado (UF):</strong> {address.uf || "Não informado"}</p>
    </div>
  );
};

export default AddressDisplay;
