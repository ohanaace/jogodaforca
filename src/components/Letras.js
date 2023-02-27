import React from 'react';
export default function Letras(props){
    function escolher(letra){
      console.log('escolheu =>', letra);
      props.setPalpiteDoJogo([...props.palpiteDoJogo, letra]);
      const letrasDoJogo = props.palavraDoJogo.split('');
     // props.setDisabled(props.palpiteDoJogo.includes(letra));

      if(letrasDoJogo.includes(letra.toLowerCase())){
        console.log('Tem na palavra');
      }
      else{
        errou();  
      }
     

      fimDeJogo();
    }
    function errou(){
      let meuErro = props.erro + 1;
      props.setErro(meuErro);
      props.setForca(props.fotos[meuErro]);
    }
    function fimDeJogo(){
      if(props.erro === 6){
        alert(`Fim de Jogo! Você perdeu. A palavra era ${props.palavraDoJogo}`);
        props.setDisabled(true);
      }
    }
   return(
   
    <button data-test="letter" onClick={()=> escolher(props.letra)}
   disabled={props.palpiteDoJogo.includes(props.letra)}> {props.letra} </button>
      
   )
}