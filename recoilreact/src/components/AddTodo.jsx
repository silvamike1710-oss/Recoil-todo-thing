import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '../atoms/todoAtom'

export default function AddTodo() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useRecoilState(todoListAtom)

  const handleAdd = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setText('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-input"
        placeholder="Nova tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-btn" onClick={handleAdd} disabled={!text.trim()}>
        <span>+</span>
      </button>
    </div>
  )
}
