import React, { FC } from "react";
import cl from './GameInfo.module.css';
import { IGameItem } from "../../../types/types";

interface GameInfoProps {
    game: IGameItem | undefined
}

const GameInfo: FC<GameInfoProps> = ({game}) => {
    return( 
        <div className={cl.game__info}>
            <div className={cl.game__info__inner}>
                <div className={cl.game__info__inner__desc}>
                    <div className={cl.game__info__inner__desc__genre}>{game?.genres[0].name}</div>

                    <div className={cl.game__info__inner__desc__name}>{game?.name}</div>

                    <div className={cl.game__info__inner__desc__still}>
                        <div className={cl.game__info__inner__desc__still__date}>Release date {game?.released}</div>

                        <div className={cl.game__info__inner__desc__still__comm__count}>{game?.reviews_text_count} COMMENTS</div>
                    </div>

                    <div className={cl.game__info__inner__desc__text}>{game?.description_raw}</div>
                
                    <div className={cl.game__info__inner__desc__meta}>Metacritic - {game?.metacritic}</div>
                </div>

                <div className={cl.game__info__inner__rate}>
                    <div className={cl.game__info__inner__rate__main}>
                        <div className={cl.game__info__inner__rate__main__set} style={{width: `${game?.metacritic}%`}}></div>
                    </div>

                    <div className={cl.game__info__inner__rate__main}>
                        <div className={cl.game__info__inner__rate__main__set} style={{width: `${game && game?.rating * 100 / 5}%`}}></div>
                    </div>

                    <div className={cl.game__info__inner__rate__main}>
                        <div className={cl.game__info__inner__rate__main__set} style={{width: `${game?.screenshots_count}%`}}></div>
                    </div>

                    <div className={cl.game__info__inner__rate__main}>
                        <div className={cl.game__info__inner__rate__main__set} style={{width: `${game && game?.youtube_count * 100 / 1000000}%`}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GameInfo;