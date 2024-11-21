import React, { useState } from "react";
import AddressDisplay from "../AddressDisplay/AddressDisplay";
import "../../styles/CepForm.css";

const CepForm = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState("");

  // Valida e busca o endereço
  const handleFetchAddress = async () => {
    if (!/^\d{8}$/.test(cep)) {
      setError("Por favor, insira um CEP válido (somente 8 números).");
      setAddress(null);
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) throw new Error("CEP não encontrado. Verifique e tente novamente.");

      setAddress(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setAddress(null);
    }
  };

  return (
    <div className="cep-form-container">
      <label htmlFor="cep">Digite o CEP:</label>
      <input
        type="text"
        id="cep"
        placeholder="Ex: 01001000"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleFetchAddress}>Buscar</button>

      {error && <p className="error-message">{error}</p>}
      {address && <AddressDisplay address={address} />}
    </div>
  );
};

export default CepForm;
