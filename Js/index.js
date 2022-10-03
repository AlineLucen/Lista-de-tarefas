/**
 * métodos(FUNÇÃO) de recuperação de elementos HTML
 */
// Recupera elementos HTML a partir do nome da tag
//const todoForm = document.getElementsByTagName('form')
const todoForm = document.getElementById("todo-form")
const todos =[]

/**
 * addEventListener serve para ouvir eventos de elementos HTML
 *  sempre que forem emitidos.
 */
/**usamos uma função anônima para passá-la como parâmetro para outra
*/
todoForm.addEventListener('submit',function(event){
    /**
     * Cancela o comportamento padrão de um formulário
     * que seria o recarregamento da página tentando fazer o seu envio
     */
    event.preventDefault()
    /**
     * Cancela propagação do evento que foi emitido para os elementos pai,
     * evitando que outros sejam emitidos
     */
    event.stopPropagation()
  const todoInput= document.querySelector('#todo')// querySelector recupera o 1° elementp que atende  a um seletor css informado
  /**
   * a propriedade value é uma propriedade que representa o atributo value
   * dos elementos de formulário HTML,PARA ACESSARMOS O VALOR QUE ESTÁ DENTRO DELES
   */
  todos.push(todoInput.value)
  todoInput.value= ''
  renderizarTodos()
})
function renderizarTodos(){
    const todoslistSection = document.querySelector('#todos-list')
    todoslistSection.innerHTML = ''
     for( let tarefa of todos){

        const divCard = document.createElement('div')
        divCard.classList.add('card','bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body','d-flex','align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text','flex-grow-1','text-truncate')

        pTodoText.innerText = tarefa

        const btnDelete = document.createElement("button")
        btnDelete.classList.add('btn','delete-todo')
        
          /**
           * arrow functions SEMPRE são anônimas
           */
           btnDelete.addEventListener('click',()=>{
            /**
             * indexOf informa em qual indice se encontra um determinado valor
             * dentro do seu array
             */
            const index = todos.indexOf(tarefa)
            /**
             * splice serve para excluir um determinado valor do seu array a partir do indice
             */
            todos.splice(index,1)
            renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText ='delete'
        /**
         * appendChild serve para colocar  um novo elementos Html dentro dos outros
         */

        btnDelete.appendChild(spanIcon)
        /**
         * append serve para colocar  um  ou mais  elementos Html dentro dos outros
         */
          

        divCardBody.append(pTodoText,btnDelete)
        divCard.appendChild(divCardBody)

        todoslistSection.appendChild(divCard)


     }
}
