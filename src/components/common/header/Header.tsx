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
import HeaderNavItem from "./headerNavItem/HeaderNavItem";
import HeaderModal from "../../UI/headerModal/HeaderModal";
import HeaderMediaItem from "./headerMediaItem/HeaderMediaItem";





const Header: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [modalID, setModalID] = useState<number | null>(null);
    
    const [itemModal, setItemModal] = useState<boolean>(false);
    const [itemID, setItemID] = useState<number | null>(null);

    const handleMouseOverModal = (): void => {
        setModal(true);
    }

    const handleMouseOutModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setModal(false)
    } 

    const handleMouseOverItem = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setItemModal(true);
    }

    const handleMouseOutItem = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setItemModal(false);
    } 

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
                        <HeaderLinks path="/">Home</HeaderLinks>
                        <HeaderNavItem path="/gamesList" onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal} id={1} setModalID={setModalID} modalID={modalID} modal={modal} listLinks={['Game Reviews', 'Single Game Reviewe']} linkName="Games"><img src={arrow} className={cl.header__inner__nav__item__img}/></HeaderNavItem>
                        <HeaderNavItem path='/' onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal} id={2} setModalID={setModalID} modalID={modalID} modal={modal} listLinks={['Home','Articles', 'Single Articles', 'Game Reviews', 'Single Game Reviewe', 'Contact']} linkName="Pages"><img src={arrow} className={cl.header__inner__nav__item__img}/></HeaderNavItem>
                        <HeaderNavItem path='/' onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal} id={3} setModalID={setModalID} modalID={modalID} modal={modal} listLinks={['Articles', 'Single Articles']} linkName="Articles"><img src={arrow} className={cl.header__inner__nav__item__img}/></HeaderNavItem>
                        <HeaderNavItem path='/' onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal} id={4} setModalID={setModalID} modalID={modalID} modal={modal} listLinks={['Game Reviews', 'Single Game Reviewe']} linkName="Reviews"><img src={arrow} className={cl.header__inner__nav__item__img}/></HeaderNavItem>
                        <HeaderLinks path="https://rawg.io/">RAWG</HeaderLinks>
                    </nav>

                    <div className={cl.header__inner__media}>
                        <HeaderMediaItem id={1} itemModal={itemModal} itemID={itemID} onMouseOver={handleMouseOverItem} onMouseOut={handleMouseOutItem} setItemID={setItemID} img={telegramm} name={"telegramm"}/>
                        <HeaderMediaItem id={2} itemModal={itemModal} itemID={itemID} onMouseOver={handleMouseOverItem} onMouseOut={handleMouseOutItem} setItemID={setItemID} img={instagram} name={"instagram"}/>
                        <HeaderMediaItem id={3} itemModal={itemModal} itemID={itemID} onMouseOver={handleMouseOverItem} onMouseOut={handleMouseOutItem} setItemID={setItemID} img={pinterest} name={"pinterest"}/>
                        <HeaderMediaItem id={4} itemModal={itemModal} itemID={itemID} onMouseOver={handleMouseOverItem} onMouseOut={handleMouseOutItem} setItemID={setItemID} img={vk} name={'vk'}/>
                        <HeaderMediaItem id={5} itemModal={itemModal} itemID={itemID} onMouseOver={handleMouseOverItem} onMouseOut={handleMouseOutItem} setItemID={setItemID} img={twitter} name={'twitter'}/>
                        <HeaderMediaItem id={6} itemModal={itemModal} itemID={itemID} onMouseOver={handleMouseOverItem} onMouseOut={handleMouseOutItem} setItemID={setItemID} img={facebook} name={"facebook"}/>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;