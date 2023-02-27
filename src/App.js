import React from 'react';
import './css/reset.css';
import './css/style.css';
import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';
import Jogo from './components/Jogo.js';
import Letras from './components/Letras.js'
import palavras from './palavras.js';

function App() {
  const [palavraDoJogo, setPalavraDoJogo] = React.useState('');
  const [palpiteDoJogo, setPalpiteDoJogo] = React.useState([]);
  const [palavraOculta, setPalavraOculta] = React.useState('');
  const [erro, setErro] = React.useState(0);
  const [underline, setUnderline] = React.useState([]);
  const [palavra] = React.useState(palavras);
  const [fotos, setFotos] = React.useState([forca0, forca1, forca2, forca3, forca4, forca5, forca6]);
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [forca, setForca] = React.useState(fotos[0]);
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className="App">
      <Jogo forca={forca}
      palavraOculta={palavraOculta}
      setPalavraOculta={setPalavraOculta}
      palavra={palavra}
      setForca={setForca}
      setDisabled={setDisabled}
      palavraDoJogo={palavraDoJogo}
      setPalavraDoJogo={setPalavraDoJogo}
      underline={underline}
      setUnderline={setUnderline}
      erro={erro}
      setErro={setErro} 
      palpiteDoJogo={palpiteDoJogo}
      setPalpiteDoJogo={setPalpiteDoJogo}/>
      
      <div className="Letras">
        {alfabeto.map((c, index) => <Letras 
        letra={c.toUpperCase()} 
        disabled={disabled}
        setDisabled={setDisabled}
        palavraDoJogo={palavraDoJogo}
        fotos={fotos}
        setFotos={setFotos}
        setForca={setForca}
        erro={erro}
        setErro={setErro} 
        palpiteDoJogo={palpiteDoJogo}
        setPalpiteDoJogo={setPalpiteDoJogo}
        key={c}/>
        )}
      </div>
    </div>
  );
}

export default App;