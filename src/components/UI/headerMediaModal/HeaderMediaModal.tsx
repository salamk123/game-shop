import React, { FC, useEffect, useState } from "react";
import cl from './HeaderMediaModal.module.css';

interface HeaderMediaModalProps {
    id: number,
    itemModal: boolean,
    itemID: number | null
    name: string
}

const HeaderMediaModal: FC<HeaderMediaModalProps> = ({id, itemModal, itemID, name}) => {
    const clName: string[] = [cl.media__modal];
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    useEffect(() => {
        if (itemModal && (id === itemID)) {
            setIsActive(true)
            const timer = setTimeout(() => setIsAnimated(true), 100)

            return () => clearTimeout(timer);
        } else {
            setIsAnimated(false)
            const timer = setTimeout(() => setIsActive(false), 100)

            return () => clearTimeout(timer);
        }
    }, [id, itemModal, itemID])

    if (isActive) clName.push(cl.active);
    if (isAnimated) clName.push(cl.animation)

    return(
        <div className={clName.join(' ')}>
            {name}
        </div>
    )
}


export default HeaderMediaModal;