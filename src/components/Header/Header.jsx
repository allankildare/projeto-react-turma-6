// Packages
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// styles
import { Menu } from './styles'

class Header extends Component {
    render() {
        return (
            <Menu>
                <nav>
                    <ul>
                        <li><Link to="/drinks">Drinks</Link></li>
                        <li><Link to="sobre-nos">Sobre nós</Link></li>
                        <li><Link to="/" className="logo">Bons Drinks</Link></li>
                        <li><Link to="nosso-time">Nosso time</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </Menu>
        )
    }
}

export default Header
