import { emberekLISTA } from "./adat.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";
init()
function init(){
    megjelenit(htmlOsszeallit(emberekLISTA));
}