import React from 'react'
import produtos from '../data/produtos'

export default (props) => {

    function getProdutosListItem() {
        return produtos.map(prod =>{
            return <li key={prod.id}>
                {prod.id} - {prod.nome} - {prod.preco}MZN
            </li>
        })
    }

    return (
        <div>
            <h1>Repetição</h1>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}
