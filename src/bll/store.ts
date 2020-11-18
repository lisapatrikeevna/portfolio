import {combineReducers, createStore} from "redux";
import skilReduser from "./skilReduser";

let reducer = combineReducers({
skils:skilReduser,
});
let store= createStore(reducer);

// @ts-ignore
window.store = store;
export default store;