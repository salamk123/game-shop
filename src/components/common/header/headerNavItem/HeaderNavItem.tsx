import React, { FC } from "react";
import cl from './HeaderNavItem.module.css';
import HeaderLinks from "../../../UI/headerLinks/HeaderLinks";
import HeaderModal from "../../../UI/headerModal/HeaderModal"; 

interface HeaderNavItemProps {
    linkName: string,
    children?: React.ReactNode,
    onMouseOver?: () => void;
    onMouseOut?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void; 
    id: number,
    modalID?: number | null;
    setModalID?: React.Dispatch<React.SetStateAction<number | null>> 
    listLinks: string[],
    modal?: boolean
}


const HeaderNavItem: FC<HeaderNavItemProps> = ({linkName, children, onMouseOver, onMouseOut, id, modal, modalID, setModalID, listLinks}) => {
    const handleOverEv = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        onMouseOver?.()
        setModalID?.(id)
        console.log("setModalID: ", modalID, 'id: ', id)
    }

    return(
        <div className={cl.header__inner__nav__item} onMouseOver={(event: React.MouseEvent<HTMLElement, MouseEvent>) => handleOverEv(event)} onMouseOut={onMouseOut}>
            <HeaderLinks>{linkName}</HeaderLinks>

            {children}

            <HeaderModal id={id} modalID={modalID} modal={modal}  listLinks={listLinks}/>
        </div>
    )
}


export default HeaderNavItem;