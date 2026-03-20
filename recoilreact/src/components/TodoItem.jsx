import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '../atoms/todoAtom'

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListAtom)

  const toggleComplete = () => {
    setTodos(todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    ))
  }

  const remove = () => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  return (
    <li className={`todo-item ${todo.completed ? 'done' : ''}`}>
      <button
        className={`check-btn ${todo.completed ? 'checked' : ''}`}
        onClick={toggleComplete}
        aria-label="Marcar como concluída"
      >
        {todo.completed && (
          <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <span className="todo-text">{todo.text}</span>

      <button className="remove-btn" onClick={remove} aria-label="Remover tarefa">
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </li>
  )
}
