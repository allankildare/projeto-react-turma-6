import styled from 'styled-components'
import mainBg from './../../assets/images/main_bg.jpg'

export const MainStyled = styled.div`
    background: url(${mainBg});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    display: grid;
    place-items: center;

    .logo {
        font-family: 'Bilbo Swash Caps', cursive;
        font-size: 120px;
        color: var(--white);
        text-shadow: 1px 2px 3px #666;
        animation: zoomIn .6s linear both;
    }
`
