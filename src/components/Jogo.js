import React from 'react';

export default function Jogo(props){
    return (
        <>
            <div className="Jogo">
                <img src={props.imagem} alt="forca"/>
                <button className="start">Escolher palavra</button>
            </div>
        </>
    )
}