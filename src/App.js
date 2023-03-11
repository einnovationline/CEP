import './App.css';
import { useState } from 'react';

function App() {

  /**************Função CEP*/

  const [endereco, setEndereco] = useState('')

  function manipularEndereco (evento) {
    const cep = evento.target.value
    setEndereco ({cep})
  
  if (cep && cep.length === 8 ) {
    //obter o cep
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(resposta => resposta.json())
    .then(dados => {
      setEndereco(enderecoAntigo => {
        return {
          ...enderecoAntigo,//... é um spread que permite definir um número indefinido de parâmetros para uma função, Array ou objeto
          cep: dados.cep,//dados são da API
          logradouro: dados.logradouro,
          complemento: dados.complemento,
          bairro: dados.bairro,
          localidade: dados.localidade,
          uf: dados.uf,
          ibge: dados.ibge,
          gia: dados.gia,
          ddd: dados.ddd,
          siafi: dados.siafi
        }
      })//setEndereco
//console.log(dados)
    })//dados =>
  }//fim do if
}

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='Digite o Cep' 
        onChange={manipularEndereco}  />
        <ul>
          <li>CEP:        {endereco.cep}</li>
          <li>rua: 			  {endereco.logradouro}</li>
          <li>complemento:{endereco.complemento}</li>
          <li>bairro: 		{endereco.bairro}</li>
          <li>localidade: {endereco.localidade}</li>
          <li>uf: 			  {endereco.uf}</li>
          <li>ibge: 			{endereco.ibge}</li>
          <li>gia: 			  {endereco.gia}</li>
          <li>ddd: 			  {endereco.ddd}</li>
          <li>siafi: 			{endereco.siafi}</li>
        </ul>
      </header>
    </div>
  );

  /******** Função mudar nome
  let nome = 'Herlon'//se fosse uma constante const não aceitaria a mudança do valor, let aceita, aqui desse jeito 
  no clique do botão não há mudança, pois o react não renderiza/atualiza de qualquer jeito o DOM Document Object Model 
  (DOM) é uma interface de programação para os documentos HTML e XML. o usestate faz esse aviso para renderizar o componente.
  cria-se uma constante onde no primeiro parâmentro é o estado e a 2 posição atualiza o estado

  const [nome, setNome] = useState('Herlon')

  function mudarNome () {
    //nome = 'Herlon Neri Hostins' só isso não atualizaria conforme explicado acima
    setNome('Herlon Neri Hostins')
    console.log(nome)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{nome}</h1>
        <button onClick={mudarNome}>Altera o nome</button>
      </header>
    </div>
  );
*/
}

export default App