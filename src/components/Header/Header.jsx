import React, { Component } from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className={style.menu}l>
                        <Link to="/drinks">Drinks</Link>
                        <Link to="sobre-nos">Sobre nós</Link>
                        <Link to="/" className={style.logo}>Bons Drinks</Link>
                        <Link to="nosso-time">Nosso time</Link>
                        <Link to="/contato">Contato</Link>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
