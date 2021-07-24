import {combineReducers } from "redux";
import gamesReducer from "./gamesReducers";
import detailReducer from "./detailReducer";



const rootReducer = combineReducers({ 
    games: gamesReducer, // a state game
    detail: detailReducer, // a state user
});
export default rootReducer;  