import React, { FC } from "react";
import cl from './HeaderLinks.module.css';


interface HeaderLinksProps {
    children: React.ReactNode
}

const HeaderLinks: FC<HeaderLinksProps> = ({children}) => {
    return(
        <a className={cl.header__link}>{children}</a>
    )
}


export default HeaderLinks;

