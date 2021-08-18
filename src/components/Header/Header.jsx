import React, { Component } from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className={style.menu}>
                        <li><Link to="/drinks">Drinks</Link></li>
                        <li><Link to="sobre-nos">Sobre nós</Link></li>
                        <li><Link to="/" className={style.logo}>Bons Drinks</Link></li>
                        <li><Link to="nosso-time">Nosso time</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
