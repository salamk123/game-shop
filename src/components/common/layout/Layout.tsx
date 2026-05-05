import { FC } from "react";
import cl from './Layout.module.css';
import LayoutList from "./layoutList/LayoutList";
import logo from './layoutImg/layout_logo.png';



const Layout: FC = () => {
    return(
        <section className={cl.layout}>
            <div className="container">
                <div className={cl.layout__inner}>
                    <div className={cl.layout__inner__desc}>
                        <img src={logo} className={cl.layout__inner__desc__title}/>

                        <div className={cl.layout__inner__desc__txt}>Эффективная монетизация игр сегодня строится на гибридных моделях, сочетающих разовые покупки, подписки и микроплатежи. Ключ к успеху — понимание аудитории и предложение ей ценности за разумную цену.</div>
                    </div>

                    <LayoutList title="Game Reviews"/>

                    <LayoutList title="Most Popular"/>
                    
                    <LayoutList title="New Updates"/>
                </div>

            </div>
        </section>
    )
}


export default Layout