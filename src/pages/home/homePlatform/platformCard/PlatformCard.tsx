import React, {  FC  } from "react";
import cl from './PlatformCard.module.css';
import PlatformButton from "../../../../components/UI/platformButton/PlatformButton";

interface PlatformCardProps {
    img: string,
}

const PlatformCard: FC<PlatformCardProps> = ({img}) => {
    return(
        <div className={cl.platform__card}>
            <img src={img} className={cl.platform__card__img}/>

            <PlatformButton>View Games</PlatformButton>
        </div>
    )
}


export default PlatformCard;