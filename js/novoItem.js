import { carregaTarefas } from "./carregaTarefa.js";

export const novoItem = ()=> {
   const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
   const inputTarefa = document.querySelector('.checklist__input')
   const calendario = document.querySelector('.checklist__input--data')

   let conteudoInput = inputTarefa.value
   let dataInfo = moment(calendario.value)
   let dataFormatada = dataInfo.format('DD/MM/YYYY')
   let hora = dataInfo.format('HH:MM a')
   let concluida = false

   const dados = {
      dataFormatada,
      conteudoInput,
      hora,
      concluida
   }

   const tarefasAtualizadas = [...tarefas, dados]

   localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

   inputTarefa.value = ''
   carregaTarefas()
}

