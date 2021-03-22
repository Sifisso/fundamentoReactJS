import './App.css'
import React from 'react'
import Card from './components/layout/Card'

import ComFilhos from './components/ComFilhos'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) =>{
    return(
        <div className="App">

            <Card titulo="#06 - Repetição v.2"> 
                <CondicionalComIf numero={12}></CondicionalComIf>
            </Card>

            <Card titulo="#05 - Repetição v.1"> 
                <Condicional numero={9}></Condicional>
            </Card>

            <Card titulo="#04 - Repetição"> 
                <Repeticao></Repeticao>
            </Card>
            
            <Card titulo="#03 - Componente com Filhos"> 
            
                <ComFilhos>
                    <ul>
                        <li>Olga</li>
                        <li>Keyla</li>
                        <li>Sifisso</li>
                        <li>Lipe</li>
                    </ul> 
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parametros"> 
            <ComParametro titulo="Esse é o título" 
            subtitulo="Esse é o subtítulo" subtitulo="Epah"/>
            </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro/>
            </Card>

            {/* <ComFilhos>
                <ul>
                    <li>Olga</li>
                    <li>Keyla</li>
                    <li>Sifisso</li>
                    <li>Lipe</li>
                </ul> 
            </ComFilhos> */}
            {/* <Primeiro/>
            <ComParametro titulo="Esse é o título" 
            subtitulo="Esse é o subtítulo" subtitulo="Epah"/> */}
    </div> 
    )
}