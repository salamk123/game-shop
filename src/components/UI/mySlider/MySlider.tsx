import React, { FC, useState, useEffect } from "react";
import cl from './MySlider.module.css';
import MySliderItem from "./mySliderItem/MySliderItem";
import { getImages, getIsImagesLoading, loadImages } from "../../../store/slices/imagesSlice/ImageSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { IGameImg } from "../../../types/types";

interface MySliderProps {
    id: string | undefined;
    currentSlideId: number,
    setCurrentSlideId: React.Dispatch<React.SetStateAction<number>>
}


const MySlider: FC<MySliderProps> = ({id, currentSlideId, setCurrentSlideId}) => {
    const dispatch = useAppDispatch();
    const imgs: IGameImg[] = useAppSelector(getImages);
    const isImgsLoading = useAppSelector(getIsImagesLoading);
    const imgsList: string[] = [];
    imgs.forEach(img => imgsList.push(img.image));

    useEffect(() => {
        id && dispatch(loadImages(id));


        if (!imgsList || imgsList.length === 0) return;
        
        const timer = setInterval(() => {
            setCurrentSlideId(prev => {
                if (prev === imgsList.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 6000);

        return () => clearInterval(timer);
    }, [imgsList, dispatch]);

    return(
        <div className={cl.slider}>
            {imgsList.map((img: string, index: number) => 
                <MySliderItem id={index} listLength={imgsList.length} currentSlideId={currentSlideId} key={img} img={img}/>
            )}
        </div>
    )
}


export default MySlider;