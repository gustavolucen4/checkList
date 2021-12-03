import { criaData } from "./criaData.js"
import { ordenaDatas, removeDatasRepetidas } from "./datas.js"

export const carregaTarefas = ()=> {
   
   const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []
   const listaCarregada = document.querySelector('.checklist__lista')

   listaCarregada.innerHTML = ' '

   const datasUnicas = removeDatasRepetidas(tarefasCadastradas)
   ordenaDatas(datasUnicas)

   datasUnicas.forEach((element)=> {
      listaCarregada.appendChild(criaData(element))
   })

}