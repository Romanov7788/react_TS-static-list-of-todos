import './App.scss';

import { TodoList } from './components/TodoList';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { Todo } from './types/Todo';
import { Todos } from './types/Todos';



function getUserById(userId: number): Todo | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const todos: Todos[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
