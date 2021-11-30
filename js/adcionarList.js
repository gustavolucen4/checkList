(function(){

   const adicionarItem = () =>{
      const conteudoInput = document.querySelector('.checklist__input')
      const lista = document.querySelector('.checklist__lista')

      let tarefa = document.createElement('li')
      tarefa.classList.add('lista__item')

      let paragrafo = document.createElement('p')
      paragrafo.classList.add('lista__paragrafo')
      paragrafo.innerHTML = conteudoInput.value

      tarefa.appendChild(paragrafo)
      tarefa.appendChild(adicionarBtnConcluir())
      tarefa.appendChild(adicionarBtnExcluir())
      lista.appendChild(tarefa)

      conteudoInput.value = ' '
   }

   const adicionarBtnConcluir = ()=>{
      let concluir = document.createElement('button')
      concluir.classList.add('item__botao--completar')
      concluir.textContent = 'Concluir'

      concluir.addEventListener('click', concluirBtn)

      return concluir
   }

   function concluirBtn(event){
      let paiElement = event.target.parentElement
      let paragrafo = paiElement.querySelector('p')
      paragrafo.classList.toggle('botao--completar--done')
   }

   const adicionarBtnExcluir = ()=> {
      let excluir = document.createElement('button')
      excluir.classList.add('item__botao--excuir')
      excluir.textContent = 'Excluir'

      excluir.addEventListener('click', excluirBtn)

      return excluir
   }

   function excluirBtn(event){
      let paiElement = event.target.parentElement
      paiElement.remove()
   }

   const btnNovoItem = document.querySelector('.checklist__botao')
   btnNovoItem.addEventListener('click', adicionarItem)

})()