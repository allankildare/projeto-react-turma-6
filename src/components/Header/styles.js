import styled from 'styled-components'

export const Menu = styled.header`
    background-color: var(--header-footer-bg);
    
    nav {
        padding: 10px 0;
    }
    
    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
    }

    ul a, ul a:visited {
        font-size: 26px;
        transition: .4s ease color;
        text-decoration: none;
        color: var(--white);
    }

    ul a:hover {
        color: #b069db;
    }

    ul a.logo {
        font-family: 'Bilbo Swash Caps', cursive;
        font-size: 36px;
    }
`