import { HeaderApp } from "./style";

import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

export function Header(){

    return(        
        <HeaderApp>
            <Link to="/">
                <img src={logo} alt="Logo React Movies"/>            
            </Link>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/filmes">Filmes</Link>
                <Link to="/series">Series</Link>
            </nav>
        </HeaderApp>
    )
}