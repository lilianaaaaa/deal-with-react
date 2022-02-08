import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'react basic',
      checked: true,
    },
    {
      id: 2,
      text: 'component styling',
      checked: true,
    },
    {
      id: 3,
      text: 'Todo app',
      checked: true,
    }
  ]); //todos array -> TodoList props

  //고유값으로 사용될 id
  //ref 사용하여 변수 담기: id값은 렌더링되는 정보가 아니기 때문
  const nextId = useRef(4);

  //컴포넌트의 성능 아낄수 있도록 useCallback으로 감싼다.
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todo.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  );
  return( 
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos}/>
  </TodoTemplate>
  );
};

export default App;
