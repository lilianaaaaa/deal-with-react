import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    /* Provider 사용: value값 반드시 명시해주어야 함. */
    <ColorContext.Provider value={{color: 'red'}}>
      <div>
        <ColorBox/>
      </div>
    </ColorContext.Provider>
  );
};

export default App;
