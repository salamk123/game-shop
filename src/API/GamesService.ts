import { IGame } from "../types/types";

export default class Games {
    static async getAll(): Promise<IGame[]> {

        const apiKey = process.env.REACT_APP_RAWG_API_KEY; 

        const url: string = `https://api.rawg.io/api/games?key=${apiKey}`;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'game-shop' 
            }
            });

        if (!response.ok) {
            throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`)
        }

        const result = await response.json();
        const data: IGame[] = result.results;
            
        return data;
    }

    static async getRecom() {

        const apiKey = process.env.REACT_APP_RAWG_API_KEY; 

        const url: string = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating`;
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'game-shop' 
                }
                });

            if (!response.ok) {
                throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`)
            }

            const result = await response.json();
            
            return result.results;

        } catch (error: any) {
            console.error('Произошла ошибка', error.message);
        }
        
    }

    static async getPopular() {

        const apiKey = process.env.REACT_APP_RAWG_API_KEY; 

        const url: string = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-added`;
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'game-shop' 
                }
                });

            if (!response.ok) {
                throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`)
            }

            const result = await response.json();
            
            return result.results;

        } catch (error: any) {
            console.error('Произошла ошибка', error.message);
        }
        
    }

    static async getSpecial() {

        const apiKey = process.env.REACT_APP_RAWG_API_KEY; 

        const url: string = `https://api.rawg.io/api/games?key=${apiKey}&tags=multiplayer`;
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'game-shop' 
                }
                });

            if (!response.ok) {
                throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`)
            }

            const result = await response.json();
            
            return result.results;

        } catch (error: any) {
            console.error('Произошла ошибка', error.message);
        }
        
    }

    static async getGameInfo(id: string | undefined) {

        const apiKey = process.env.REACT_APP_RAWG_API_KEY; 

        const url: string = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'game-shop' 
                }
                });

            if (!response.ok) {
                throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`)
            }

            const result = await response.json();
            
            return result;

        } catch (error: any) {
            console.error('Произошла ошибка', error.message);
        }
        
    }

    static async getGameImgs(id: string | undefined) {

        const apiKey = process.env.REACT_APP_RAWG_API_KEY;

        const url: string = `https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`;
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'game-shop' 
                }
                });

            if (!response.ok) {
                throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`)
            }

            const result = await response.json();
            
            return result.results;

        } catch (error: any) {
            console.error('Произошла ошибка', error.message);
        }
        
    }
}