import { carregaTarefas } from "./carregaTarefa.js"
import { adicionarBtnConcluir } from "./concluirBtn.js"
import { adicionarBtnExcluir } from "./excluirBtn.js"

export const adicionarItem = ({ dataFormatada, conteudoInput, hora, concluida }, id) =>{
      
   let tarefa = document.createElement('li')
   tarefa.classList.add('lista__item')

   let paragrafo = document.createElement('p')
   paragrafo.classList.add('lista__paragrafo')
   paragrafo.innerHTML = `${hora} => ${conteudoInput}`

   if(concluida){
      paragrafo.classList.add('botao--completar--done')
   }

   tarefa.appendChild(paragrafo)
   tarefa.appendChild(adicionarBtnConcluir(carregaTarefas, id))
   tarefa.appendChild(adicionarBtnExcluir(carregaTarefas, id))

   return tarefa
}