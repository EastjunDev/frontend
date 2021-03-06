import { todoItemStatusMap } from '../utils/utils.js'

export default function TodoStatus({ todoItems, filter }) {
    this.$todoStatus = document.querySelector('#todo-status-tabs')
    this.todoItems = todoItems

    const initEventListener = () => {
        this.$todoStatus.addEventListener('click', (event) => {
            const $target = event.target
            filterItems($target)
            toggleTab($target)
        })
    }

    initEventListener()

    const filterItems = ($target) => {
        switch ($target.className) {
            case todoItemStatusMap.ALL:
                filter(this.todoItems)
                break
            case todoItemStatusMap.ACTIVE:
                filter(this.todoItems.filter(item => item.isCompleted === false))
                break
            case todoItemStatusMap.COMPLETED:
                filter(this.todoItems.filter(item => item.isCompleted === true))
                break
        }
    }

    const toggleTab = ($target) => {
        const $tabs = document.querySelectorAll('#todo-status-tabs li a')
        $tabs.forEach(status => {
            if (status.classList.contains('selected')) {
                status.classList.remove('selected')
            }
        })
        $target.classList.add('selected')
    }
}

