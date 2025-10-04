import React, { FC } from "react";
import cl from './HeaderMediaItem.module.css';
import HeaderMediaModal from "../../../UI/headerMediaModal/HeaderMediaModal";


interface HeaderMediaItemProps {
    id: number,
    itemID: number | null,
    itemModal: boolean,
    setItemID: React.Dispatch<React.SetStateAction<number | null>>
    img: string,
    onMouseOver: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseOut: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    name: string
}


const HeaderMediaItem: FC<HeaderMediaItemProps> = ({img, id, itemID, itemModal, onMouseOver, onMouseOut, setItemID, name}) => {
    const handleEventOver = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        onMouseOver?.(event);
        setItemID?.(id);
    }
 
    return(
        <div onMouseOver={handleEventOver} onMouseOut={onMouseOut} className={cl.media__item}>
            <img src={img} className={cl.media__item__img}/>

            <HeaderMediaModal id={id} itemModal={itemModal} itemID={itemID} name={name}/>
        </div>
    )
}

export default HeaderMediaItem;