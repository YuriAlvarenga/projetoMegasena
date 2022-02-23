import React, { useState } from "react"


export default props =>{
    function gerarNumeroNaocontido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max -min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaocontido(min, max, array) : aleatorio

    }
    function gerarNumeros(qtde){
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaocontido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)

        return numeros
    }

   
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div>
            <h3>{numeros.join(' ')}</h3>
            <div className="displayMega"> 
                <label>Números da Sorte</label>
                    <input type="number" 
                        min="6"
                        max="15"
                        value={qtde} 
                        onChange={(e) =>{
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                        }} 
                    />   
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}