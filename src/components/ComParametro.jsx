import React from 'react'

export default (props) => {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <p>{Array(10).fill('Sifisso ')}</p> 
        </div>
    );
}
