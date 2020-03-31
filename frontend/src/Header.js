import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () =>{
    return (
        <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <LinkWrapper to="/" className="brand-logo ml-3" activeStyle={{}}>Casa do Código</LinkWrapper>
                    <ul id="nav-mobile" className="right">
                        <li><LinkWrapper to='/autores'>Autores</LinkWrapper></li>
                        <li><LinkWrapper to='/livros'>Livros</LinkWrapper></li>
                        <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </nav>
    );
}
export default Header;
