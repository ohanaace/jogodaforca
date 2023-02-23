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
import {palavras} from './palavras.js';

function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [forca, setForca] = React.useState(forca0);
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className="App">
      <Jogo imagem={forca}/>
      <div className="Letras">
        {alfabeto.map((c) => <Letras letra={c.toUpperCase()} disabled={disabled}/>)}
      </div>
    </div>
  );
}

export default App;