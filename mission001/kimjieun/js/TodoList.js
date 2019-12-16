export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init() {
    this.$selector.addEventListener('click', (e) => {
      if (e.target.className === 'destroy') {
        this.onDeleteTodo(e.target.parentNode.dataset.idx)
      }

      if (e.target.className === 'toggle') {
        this.toggleTodo(e.target.parentNode)
      }
    })
  }

  createTodoListHtmlString = ({ text, isStatus }, index) => {
    return `<li ${isStatus ? `class=${isStatus}` : ''}>
    <div data-idx=${index} class="view">
      <input class="toggle" type="checkbox">
      <label class="label">${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>`
  }

  render = function(data) {
    this.$selector.innerHTML = data.map(this.createTodoListHtmlString).join('')
  }
}
