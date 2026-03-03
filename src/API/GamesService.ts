export default class Games {
    static async getAll() {

        const apiKey: string = 'f7cc635709544e959aaf5317ccf8cf14'; 

        const url: string = `https://api.rawg.io/api/games?key=${apiKey}`;
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`)
            }

            const result = await response.json();
            
            return result.results;

        } catch (error: any) {
            console.error('Произошла ошибка', error.message);
        }
        
    }

    static async getRecom() {

        const apiKey: string = 'f7cc635709544e959aaf5317ccf8cf14'; 

        const url: string = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating`;
        try {
            const response = await fetch(url);

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

        const apiKey: string = 'f7cc635709544e959aaf5317ccf8cf14'; 

        const url: string = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-added`;
        try {
            const response = await fetch(url);

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

        const apiKey: string = 'f7cc635709544e959aaf5317ccf8cf14'; 

        const url: string = `https://api.rawg.io/api/games?key=${apiKey}&tags=multiplayer`;
        try {
            const response = await fetch(url);

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