(function(){

   const btnNovoItem = document.querySelector('.checklist__botao')
   btnNovoItem.addEventListener('click', ()=> {

      let conteudoInput = document.querySelector('.checklist__input').value
      const lista = document.querySelector('.checklist__lista')

      const tarefa = document.createElement('li')
      tarefa.classList.add('lista__item')

      const paragrafo = document.createElement('p')
      paragrafo.classList.add('lista__paragrafo')

      paragrafo.innerHTML = conteudoInput

      tarefa.appendChild(paragrafo)
      lista.appendChild(tarefa)
   }) 
})()