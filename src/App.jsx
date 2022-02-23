import './App.css'
import Card from './card/Card'
import React from 'react'
import Mega from './megasena/Mega'
import './card/Cards.css'

export default props =>{
    return(
        <div >
            <div className='App'>
                <Card titulo= 'MEGASENA' ></Card>
                <Mega qtde = {8} className="App"></Mega>
            </div>
           
        </div>
    )
}