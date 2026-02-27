import React, { FC } from "react";
import cl from './Loader.module.css';


const Loader: FC = () => {
    return(
        <div className={cl.loader}>
            <div className={cl.loader__inner}></div>
        </div>
    )
}


export default Loader;