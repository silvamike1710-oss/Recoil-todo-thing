import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoStatsSelector } from './selectors/filteredTodosSelector'
import AddTodo from './components/AddTodo'
import FilterBar from './components/FilterBar'
import TodoList from './components/TodoList'

export default function App() {
  const stats = useRecoilValue(todoStatsSelector)

  return (
    <div className="app">
      <div className="noise" />
      <div className="container">
        <header className="header">
          <div className="header-top">
            <span className="label">GERENCIADOR</span>
            <div className="stats-pill">
              <span>{stats.completed}/{stats.total}</span>
            </div>
          </div>
          <h1 className="title">TAREFAS</h1>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: stats.total ? `${(stats.completed / stats.total) * 100}%` : '0%' }}
            />
          </div>
        </header>

        <main className="main">
          <AddTodo />
          <FilterBar />
          <TodoList />
        </main>

        <footer className="footer">
          <span>Powered by <strong>Recoil</strong> + React</span>
        </footer>
      </div>
    </div>
  )
}
