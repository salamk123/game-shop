import React, { FC, useEffect } from "react";
import cl from './GameIntroImgs.module.css';
import { IGameImg } from "../../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { getImages, getIsImagesLoading, loadImages } from "../../../../store/slices/imagesSlice/ImageSlice";


interface GameIntroImgsProps{
    changeSlide: (id: number) => void,
    id: string | undefined
}


const GameIntroImgs: FC<GameIntroImgsProps> = ({changeSlide, id}) => {
    const dispatch = useAppDispatch();
    const imgs: IGameImg[] = useAppSelector(getImages);
    const imgsLoading: boolean = useAppSelector(getIsImagesLoading);

    const imgsList: string[] = [];
    imgs.forEach(img => imgsList.push(img.image));

    useEffect(() => {
        id && dispatch(loadImages(id))
    }, [dispatch])

    return(
        <div className={cl.intro__imgs}>
            {imgsList.map((img, index) => 
                <img onClick={() => changeSlide(index)} className={cl.intro__imgs__item} src={img} key={img}/>
            )}
        </div>
    )
}


export default GameIntroImgs;