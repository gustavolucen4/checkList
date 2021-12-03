export const adicionarBtnExcluir = (atualiza, id)=> {
   let excluir = document.createElement('button')
   excluir.classList.add('item__botao--excuir')
   excluir.textContent = 'Excluir'

   excluir.addEventListener('click', ()=> {excluirBtn(atualiza, id)} )

   return excluir
}

function excluirBtn(atualiza, id){

   const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
   tarefas.splice(id)

   localStorage.setItem('tarefas', JSON.stringify(tarefas))

   atualiza()
}