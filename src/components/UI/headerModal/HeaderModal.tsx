import React, { FC, useEffect, useState } from "react";
import cl from './HeaderModal.module.css';

interface HeaderModalProps {
    id: number,
    modalID: number | null | undefined;
    listLinks: string[],
    modal: boolean | undefined
}

const HeaderModal: FC<HeaderModalProps> = ({listLinks, modal, id, modalID}) => {
    const clName: string[] = [cl.modal];
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isAnimated, setIsAnimated] = useState<boolean>(false);
    if (isActive) clName.push(cl.active);
    if (isAnimated) clName.push(cl.animation);
    

    useEffect(() => {
        if (modal && (modalID == id)) {
            setIsActive(true)

            const timer = setTimeout(() => {
                setIsAnimated(true)
            }, 100)

            return () => clearTimeout(timer)
        } else {
            setIsAnimated(false);

            const timer = setTimeout(() => {
                setIsActive(false);
            })
        }
    }, [modal, modalID, id])


    return(
        <div className={clName.join(' ')}>
            {listLinks.map((link, index) => 
                <div key={index} className={cl.modal__item}>{link}</div>
            )}
        </div>
    )
}


export default HeaderModal;