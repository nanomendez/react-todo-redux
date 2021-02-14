import './App.css';
import React from 'react'
import TodoInput from './componentes/TodoInput'
import TodoList from './componentes/TodoList'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const initialValue = { 
  items: []
}

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload]}
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(element => element.item !== action.payload)}
    default:
      return state
  }
}

//, window.__ es para que la extension se conecte con el store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
