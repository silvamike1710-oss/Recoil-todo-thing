import { selector } from 'recoil'
import { todoListAtom, filterAtom } from '../atoms/todoAtom'

// Seletor: retorna tarefas filtradas pelo filtro atual
export const filteredTodosSelector = selector({
  key: 'filteredTodosSelector',
  get: ({ get }) => {
    const todos = get(todoListAtom)
    const filter = get(filterAtom)

    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed)
      case 'pending':
        return todos.filter((todo) => !todo.completed)
      default:
        return todos
    }
  },
})

// Seletor: contadores de status
export const todoStatsSelector = selector({
  key: 'todoStatsSelector',
  get: ({ get }) => {
    const todos = get(todoListAtom)
    const total = todos.length
    const completed = todos.filter((t) => t.completed).length
    const pending = total - completed
    return { total, completed, pending }
  },
})
