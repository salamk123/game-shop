import React, { FC } from "react";
import cl from './GameIntroImgs.module.css';


interface GameIntroImgsProps{
    imgs: string[] | undefined,
    changeSlide: (id: number) => void,
}


const GameIntroImgs: FC<GameIntroImgsProps> = ({imgs, changeSlide}) => {
    return(
        <div className={cl.intro__imgs}>
            {imgs && imgs.map((img, index) => 
                <img onClick={() => changeSlide(index)} className={cl.intro__imgs__item} src={img} key={img}/>
            )}
        </div>
    )
}


export default GameIntroImgs;