import React, { FC } from "react";
import cl from './Footer.module.css';


const Footer: FC = () => {
    return(
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.footer__inner}>
                    <div className={cl.footer__inner__title}>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</div>
                
                    <div className={cl.footer__inner__links}>
                        <a className={cl.footer__inner__links__item}>Home</a>
                        
                        <a className={cl.footer__inner__links__item}>Games</a>
                        
                        <a className={cl.footer__inner__links__item}>Article</a>
                        
                        <a className={cl.footer__inner__links__item}>Reviews</a>
                        
                        <a className={cl.footer__inner__links__item}>Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;