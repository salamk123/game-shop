import React, { FC, useState } from "react";
import cl from './GameIntro.module.css';
import MySlider from "../../../components/UI/mySlider/MySlider";
import GameIntroImgs from "./gameIntroImgs/GameIntroImgs";

interface GameIntroProps {
    imgs: string[] | undefined,

}


const GameIntro: FC<GameIntroProps> = ({imgs}) => {
    const [currentSlideId, setCurrentSlideId] = useState<number>(1);
    
    const changeSlide = (id: number): void => {
        setCurrentSlideId(id);
    }

    return(
        <section className={cl.intro}>
            <MySlider currentSlideId={currentSlideId} setCurrentSlideId={setCurrentSlideId} imgs={imgs}/>

            <GameIntroImgs changeSlide={changeSlide} imgs={imgs}/>
        </section>
    )
}


export default GameIntro;