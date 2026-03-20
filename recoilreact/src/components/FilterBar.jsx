import React from 'react'
import { useRecoilState } from 'recoil'
import { filterAtom } from '../atoms/todoAtom'
import { todoStatsSelector } from '../selectors/filteredTodosSelector'
import { useRecoilValue } from 'recoil'

const FILTERS = [
  { key: 'all', label: 'Todas' },
  { key: 'pending', label: 'Pendentes' },
  { key: 'completed', label: 'Concluídas' },
]

export default function FilterBar() {
  const [filter, setFilter] = useRecoilState(filterAtom)
  const stats = useRecoilValue(todoStatsSelector)

  const counts = {
    all: stats.total,
    pending: stats.pending,
    completed: stats.completed,
  }

  return (
    <div className="filter-bar">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`filter-btn ${filter === key ? 'active' : ''}`}
          onClick={() => setFilter(key)}
        >
          {label}
          <span className="filter-count">{counts[key]}</span>
        </button>
      ))}
    </div>
  )
}
