import React, { Component } from 'react'
import style from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className={style.menu}l>
                        <li>Drinks</li>
                        <li>Sobre nós</li>
                        <li className={style.logo}>Bons Drinks</li>
                        <li>Nosso time</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
