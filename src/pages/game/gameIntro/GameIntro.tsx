import React, { FC, useState } from "react";
import cl from './GameIntro.module.css';
import MySlider from "../../../components/UI/mySlider/MySlider";
import GameIntroImgs from "./gameIntroImgs/GameIntroImgs";

interface GameIntroProps {
    id: string | undefined
}


const GameIntro: FC<GameIntroProps> = ({id}) => {
    const [currentSlideId, setCurrentSlideId] = useState<number>(1);
    
    const changeSlide = (id: number): void => {
        setCurrentSlideId(id);
    }

    return(
        <section className={cl.intro}>
            <MySlider currentSlideId={currentSlideId} setCurrentSlideId={setCurrentSlideId} id={id}/>

            <GameIntroImgs changeSlide={changeSlide} id={id}/>
        </section>
    )
}


export default GameIntro;