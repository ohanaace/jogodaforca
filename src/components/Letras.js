import React from 'react';
export default function Letras(props){
    function escolher(letra){
      console.log('escolheu =>', letra);
      props.setPalpiteDoJogo([...props.palpiteDoJogo, letra]);
      console.log(props.palpiteDoJogo);
      const letrasDoJogo = props.palavraDoJogo.split('');
     
      if(letrasDoJogo.includes(letra.toLowerCase())){
        alert('Tem na palavra');
      }
    }
   return(
   
    <button data-test="letter" onClick={()=> escolher(props.letra)}
    disabled={props.disabled}> {props.letra} </button>
      
   )
}