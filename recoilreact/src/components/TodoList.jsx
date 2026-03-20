import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodosSelector } from '../selectors/filteredTodosSelector'
import { filterAtom } from '../atoms/todoAtom'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodosSelector)
  const filter = useRecoilValue(filterAtom)

  const emptyMessages = {
    all: 'Nenhuma tarefa ainda. Adicione uma acima!',
    pending: 'Nenhuma tarefa pendente. Ótimo trabalho!',
    completed: 'Nenhuma tarefa concluída ainda.',
  }

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">◎</div>
        <p>{emptyMessages[filter]}</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
