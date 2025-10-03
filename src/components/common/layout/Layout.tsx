import React, { FC } from "react";
import cl from './Layout.module.css';
import LayoutList from "./layoutList/LayoutList";
import { IGame } from "../../../types/types";
import logo from './layoutImg/layout_logo.png';

interface LayoutProps {
    games: IGame[]
}


const Layout: FC<LayoutProps> = ({games}) => {
    return(
        <section className={cl.layout}>
            <div className="container">
                <div className={cl.layout__inner}>
                    <div className={cl.layout__inner__desc}>
                        <img src={logo} className={cl.layout__inner__desc__title}/>

                        <div className={cl.layout__inner__desc__txt}>Эффективная монетизация игр сегодня строится на гибридных моделях, сочетающих разовые покупки, подписки и микроплатежи. Ключ к успеху — понимание аудитории и предложение ей ценности за разумную цену.</div>
                    </div>

                    <LayoutList title="Game Reviews" games={games}/>

                    <LayoutList title="Most Popular" games={games}/>
                    
                    <LayoutList title="New Updates" games={games}/>
                </div>

            </div>
        </section>
    )
}


export default Layout