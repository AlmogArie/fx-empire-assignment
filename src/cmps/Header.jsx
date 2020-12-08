import React from 'react';
import { ReactComponent as Logo } from '../img/logo-full.svg'


function Header() {

    return (
        <section className="header-section flex align-center justify-center">
            <div className="logo">
                <Logo />
            </div>
        </section>
    );
}

export default Header;