import { useReducer, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

//많은 데이터 렌더링하기
function createBulkTodos(){
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
    );
    default:
      return todos;
  }
}
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //고유값으로 사용될 id
  //ref 사용하여 변수 담기: id값은 렌더링되는 정보가 아니기 때문
  const nextId = useRef(2501);

  //컴포넌트의 성능 아낄수 있도록 useCallback으로 감싼다.
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({type: 'INSERT', todo});
      nextId.current += 1; //nextId 1씩 더하기
    },
    [],
  );

  const onRemove = useCallback(
    id => {
      dispatch({type: 'REMOVE', id});
    },
    [],
  );

  const onToggle = useCallback(
    id => {
      dispatch({type: 'TOGGLE', id});
    },
    [],
  )
  return( 
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
  );
};

export default App;
