import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr/>
      {/* 현재 경로에 따라 다른 컴포넌트 보여주기 */}
      <Route path="/" component={Home} exact={true}/> 
      <Route path="/about" component={About}/>
    </div>
  );
};

export default App;
