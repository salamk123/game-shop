import React, { FC, useState, useEffect } from "react";
import cl from './MySlider.module.css';
import MySliderItem from "./mySliderItem/MySliderItem";

interface MySliderProps {
    imgs: string[] | undefined,
    currentSlideId: number,
    setCurrentSlideId: React.Dispatch<React.SetStateAction<number>>
}


const MySlider: FC<MySliderProps> = ({imgs, currentSlideId, setCurrentSlideId}) => {
    

    useEffect(() => {
        if (!imgs || imgs.length === 0) return;
        
        const timer = setInterval(() => {
            setCurrentSlideId(prev => {
                if (prev === imgs.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 6000);

        return () => clearInterval(timer);
    }, [imgs]);

    return(
        <div className={cl.slider}>
            {imgs && imgs.map((img: string, index: number) => 
                <MySliderItem id={index} listLength={imgs.length} currentSlideId={currentSlideId} key={img} img={img}/>
            )}
        </div>
    )
}


export default MySlider;