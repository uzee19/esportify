const base_url = 'https://api.rawg.io/api/';
const API_KEY = '930cfc4709d84cfb8f3d2f3d6a79be56';
const getCurrentMonth = ( ) =>{
    const month = new Date().getMonth() + 1;
    if(month<10)
    {
        return `0${month}`;
    }else{
        return month;
    }
}; 
const getCurrentDay = ( ) =>{
    const day = new Date().getDate();
    if(day<10)
    {
        return `0${day}`;
    }else{
        return day;
    }
}; 

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-5}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;


const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=11`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=11`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=11`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game details
export  const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`;
export  const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;

//search
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=10`;