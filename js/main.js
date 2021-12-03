import { novoItem } from "./novoItem.js";
import { carregaTarefas } from "./carregaTarefa.js";

const btnNovoItem = document.querySelector('.checklist__botao')
btnNovoItem.addEventListener('click', novoItem)

carregaTarefas()