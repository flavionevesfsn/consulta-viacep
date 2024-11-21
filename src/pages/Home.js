import React from "react";
import CepForm from "../components/CepForm/CepForm";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Consulta de Endereço - ViaCEP</h1>
      </header>
      <main>
        <CepForm />
      </main>
      <footer className="home-footer">
        <p>Desenvolvido por Flávio Neves</p>
      </footer>
    </div>
  );
};

export default Home;
