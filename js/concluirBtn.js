export const adicionarBtnConcluir = (atualiza, id)=>{
   let concluir = document.createElement('button')
   concluir.classList.add('item__botao--completar')
   concluir.textContent = 'Concluir'

   concluir.addEventListener('click', ()=> {concluirBtn(atualiza, id)})

   return concluir
}

function concluirBtn(atualiza, id){

   const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
   tarefas[id].concluida = !tarefas[id].concluida

   localStorage.setItem('tarefas', JSON.stringify(tarefas))

   atualiza()
}