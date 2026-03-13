import React, { useState, useEffect } from 'react';
import './App.css';

interface IJson {
  nome: string;
  urlFoto: string;
  tipo: string;
  pagamento: number;
}

function App() {

  const [lista, setLista] = useState<IJson[]>([]);
  const url = `http://folhapagamentoale.runasp.net/funcionario`;
  const [indice, setIndice] = useState(0);

  async function ConsultarApi() {
    const resposta = await fetch(url);

    if (resposta.ok) {
      setLista(await resposta.json())
    }
  }

  useEffect(() => {
    ConsultarApi();
  }, []);

  function proximo() {
    if (indice < lista.length - 1) {
      setIndice(indice + 1);
    }
    else {
      setIndice(0);
    }
  }

  function voltar() {
    if (indice >= 0) {
      setIndice(indice - 1);
    }
  }


  return (
    <div className="container">
      <div className="card">
        <img src={lista[indice]?.urlFoto} />
        <p>Nome: {lista[indice]?.nome}</p>
        <p>Tipo: {lista[indice]?.tipo}</p>
        <p>Salario {lista[indice]?.pagamento}</p>
      </div>
      <button onClick={() => proximo()}>Avançar</button>
      <button onClick ={() => voltar()}>Voltar</button>
    </div>
  );
}

export default App;