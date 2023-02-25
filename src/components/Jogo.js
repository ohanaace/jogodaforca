import React from 'react';
import {palavras} from '../palavras.js';

export default function Jogo(props){
    const letrasDoJogo = props.palavraDoJogo.split('');
    const traco = " _ "
    function iniciarJogo(){
        props.setPalavraDoJogo(palavras[Math.floor(Math.random() * palavras.length)]);
        props.setDisabled(false);
        console.log(letrasDoJogo);
        //console.log(props.underline)
        renderizarUnderline()
    }
    function renderizarUnderline(){
        for(let i= 0; i < letrasDoJogo.length; i++){
            props.setUnderline([...props.underline, traco])
        }
    }
    return (
        <>
            <div className="Jogo">
                <img src={props.forca} alt="forca" data-test="game-image"/>
                <div className="flex">
                    <button className="start" data-test="choose-word" onClick={()=> iniciarJogo()}>Escolher palavra</button>
                    <p>{props.underline}</p>
                </div>
            </div>
        </>
    )
}