// import des modules necessaires
import React from 'react';
import '@/Layouts/Footer/Footer.css'

import Logo from '@/Assets/Images/LogoFooter.png'

// fonction d'affichage du Footer
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <img src={Logo} alt="Logo" />
                <p>© 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;