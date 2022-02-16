import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    /* Provider 사용: value값 반드시 명시해주어야 함. */
    <ColorProvider>
      <div>
        <ColorBox/>
      </div>
    </ColorProvider>
  );
};

export default App;
