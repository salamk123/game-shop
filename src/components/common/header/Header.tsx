import React, { FC, useState } from "react";
import cl from './Header.module.css';
import HeaderInput from "../../UI/headerInput/HeaderInput";
import HeaderButton from "../../UI/headerButton/HeaderButton";
import HeaderLinks from "../../UI/headerLinks/HeaderLinks";
import logo from './headerImg/logo.png';
import instagram from './headerImg/instagram.png';
import telegramm from './headerImg/telegram.png';
import pinterest from './headerImg/pinterest.png';
import facebook from './headerImg/facebook.png';
import twitter from './headerImg/twitter.png';
import vk from './headerImg/vk.png';
import arrow from './headerImg/arrow.png';





const Header: FC = () => {
    

    return(
        <header className={cl.header}>
            
            <div className="container">
                <div className={cl.header__intro}>
                    <img src={logo} className={cl.header__intro__logo}/>

                    <div className={cl.header__intro__tools}>
                        <HeaderInput placeholder="search"/>

                        <HeaderButton>Login / Register</HeaderButton>
                    </div>
                </div>

                <div className={cl.header__inner}>
                    <nav className={cl.header__inner__nav}>
                        <HeaderLinks>Home</HeaderLinks>
                        <HeaderLinks>Games</HeaderLinks>
                        <HeaderLinks>Pages</HeaderLinks>
                        <HeaderLinks>Articles</HeaderLinks>
                        <HeaderLinks>Reviews</HeaderLinks>
                        <HeaderLinks>Contact</HeaderLinks>
                    </nav>

                    <div className={cl.header__inner__media}>
                        <img src={telegramm} className={cl.header__inner__media__item}/>
                        <img src={instagram} className={cl.header__inner__media__item}/>
                        <img src={pinterest} className={cl.header__inner__media__item}/>
                        <img src={vk} className={cl.header__inner__media__item}/>
                        <img src={twitter} className={cl.header__inner__media__item}/>
                        <img src={facebook} className={cl.header__inner__media__item}/>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;