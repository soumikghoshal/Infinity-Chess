import { initGame } from "./Data/data.js";
import { initGameRander } from "./Rander/main.js";
import { GlobalEvent } from "./Events/global.js";

//will be usefull till game ends
const globalState  = initGame();

initGameRander(globalState);

//console.log(globalState);

GlobalEvent();

export {globalState};