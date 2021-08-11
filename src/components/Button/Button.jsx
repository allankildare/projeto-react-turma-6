import React, { Component } from 'react'
import style from './Button.module.css'

class Button extends Component {
    constructor(props) {
        super(props)
        this.meuClique = this.meuClique.bind(this)
    }

    meuClique() {
        console.log('Fui clicado!')
    }

    render() {
        return (
            <button className={style.button} onClick={this.meuClique}>{this.props.texto}</button>
        )
    };
};

export default Button
