import React, { FC } from "react";
import cl from './HeaderLinks.module.css';
import { Link } from "react-router-dom";


interface HeaderLinksProps {
    children: React.ReactNode,
    path: string;
}

const HeaderLinks: FC<HeaderLinksProps> = ({children, path}) => {
    return(
        <Link to={path} className={cl.header__link}>{children}</Link>
    )
}


export default HeaderLinks;

