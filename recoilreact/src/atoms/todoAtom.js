import { atom } from 'recoil'

// Átomo principal: lista de tarefas
export const todoListAtom = atom({
  key: 'todoListAtom',
  default: [
    { id: 1, text: 'Estudar Recoil', completed: true },
    { id: 2, text: 'Construir projeto com Vite', completed: false },
    { id: 3, text: 'Dominar estado global', completed: false },
  ],
})

// Átomo do filtro atual
export const filterAtom = atom({
  key: 'filterAtom',
  default: 'all', // 'all' | 'completed' | 'pending'
})
