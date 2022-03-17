//import Counter from "./components/Counter";
import CounterContainer from "./containers/CounterContainer";
import TodosContainers from "./containers/TodosContainers";
//import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      {/* <Counter number={0}/> */}
      <CounterContainer />
      <hr/>
      <TodosContainers/>
    </div>
  );
};

export default App;
