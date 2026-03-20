# Todo App com Recoil

Aplicação de lista de tarefas construída com **React + Vite + Recoil**.

## 🚀 Como rodar

```bash
npm install
npm run dev
```

## 📁 Estrutura do Projeto

```
src/
├── atoms/
│   └── todoAtom.js          # Átomo da lista de tarefas + átomo do filtro
├── selectors/
│   └── filteredTodosSelector.js  # Seletor de tarefas filtradas + stats
├── components/
│   ├── AddTodo.jsx          # Campo de input e botão de adicionar
│   ├── FilterBar.jsx        # Botões de filtro (Todas / Pendentes / Concluídas)
│   ├── TodoList.jsx         # Listagem de tarefas filtradas
│   └── TodoItem.jsx         # Item individual com toggle e remoção
├── App.jsx                  # Componente raiz
├── main.jsx                 # Entry point com RecoilRoot
└── index.css                # Estilos globais
```

## 🔬 Conceitos Recoil Utilizados

| Conceito | Onde | Descrição |
|---|---|---|
| `atom` | `todoAtom.js` | Lista de tarefas e filtro atual |
| `selector` | `filteredTodosSelector.js` | Tarefas filtradas e estatísticas |
| `RecoilRoot` | `main.jsx` | Provedor global de estado |
| `useRecoilState` | `AddTodo`, `TodoItem`, `FilterBar` | Leitura + escrita |
| `useRecoilValue` | `TodoList`, `App` | Apenas leitura |
