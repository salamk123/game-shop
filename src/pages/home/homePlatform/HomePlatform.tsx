import React, { FC } from "react";
import cl from "./HomePlatform.module.css";
import PlatformCard from "./platformCard/PlatformCard";
import pc from '../homeImg/home_pc.jpg';
import ps from "../homeImg/home_ps.jpg";
import xbox from "../homeImg/home_xbox.jpg";

const HomePlatform: FC = () => {
    return(
        <section className={cl.platform}>
            <div className="container">
                <div className={cl.platform__inner}>
                    <PlatformCard img={ps}/>

                    <hr className={cl.platform__inner__line}/>

                    <PlatformCard img={pc}/>

                    <hr className={cl.platform__inner__line}/>

                    <PlatformCard img={xbox}/>
                </div>
            </div>
        </section>
    )
}

export default HomePlatform;