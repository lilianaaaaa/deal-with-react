import { useState, useRef, useCallback } from "react";
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
const App = () => {
  const [todos, setTodos] = useState(createBulkTodos); //todos array -> TodoList props

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
      setTodos(todos => todos.concat(todo));//함수형 업데이트: setState를 비동기로 수행할 때 값을 전달하는 대신 최신의 state와 함께 함수를 전달
      nextId.current += 1; //nextId 1씩 더하기
    },
    [],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>  
          todo.id === id ? { ...todo, checked: !todo.checked } : todo, 
        ),//todo.id와 현재 파라미터로 사용된 id값이 같을때는 정해준 규칙대로 새로운 객체를 생성하지만, id값이 다를때는 변화를 주지 않고 처음 받아왔던 상태 그대로 반환
      );
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
