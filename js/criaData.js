import { adicionarItem } from "./adicionarItem.js";
import { ordenaHoras } from "./datas.js";

export const criaData = (data)=> {
   const tarefa = JSON.parse(localStorage.getItem('tarefas')) || []

   const dataTopo = document.createElement('ul')
   dataTopo.classList.add('lista__mini')

   const dataMoment = moment(data, 'DD/MM/YYYY')
   const conteudo = `<p class="lista__paragrafo--mini">${dataMoment.format('DD/MM/YYYY')}</p>`

   dataTopo.innerHTML = conteudo

   tarefa.forEach( (element, id)=> {
      const dia = moment(element.dataFormatada, 'DD/MM/YYYY')
      const diff = dataMoment.diff(dia)

      if(diff === 0){
         dataTopo.appendChild(adicionarItem(element, id))
      }
   })

   return dataTopo
}