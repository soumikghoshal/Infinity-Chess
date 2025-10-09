import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

function GlobalEvent() {
    ROOT_DIV.addEventListener("click", function (event) {
        if (event.target.localName === "img") {
            const clickId = event.target.parentNode.id;
            const flatArray = globalState.flat();
            console.log(flatArray.find((el) => el.id == clickId));
            
            
        }
        
    });
}

export {GlobalEvent};