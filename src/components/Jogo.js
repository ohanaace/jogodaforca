import React from 'react';


export default function Jogo(props){
    const letrasDoJogo = props.palavraDoJogo.split('');
    function iniciarJogo(){
        props.setPalavraDoJogo(props.palavra[Math.floor(Math.random() * props.palavra.length)]);
        props.setPalavraOculta(props.palavraDoJogo.replace(/\w/g, "_"))
        props.setDisabled(false);
    }

    return (
        <>
            <div className="Jogo">
                <img src={props.forca} alt="forca" data-test="game-image"/>
                <div className="flex">
                    <button className="start" data-test="choose-word" onClick={()=> iniciarJogo()}>Escolher palavra</button>
                   {letrasDoJogo.map((letra, index) => (
                    <span data-test="word" key={index}>{props.palpiteDoJogo.includes(letra)? letra : "_"}
                    </span>))}
                 </div>
            </div>
        </>
    )
}