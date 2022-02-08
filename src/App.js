import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

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
        <li>
          <Link to="/profile/liliana">liliana profile</Link>
        </li>
        <li>
          <Link to="/profile/benny">benny profile</Link>
        </li>
      </ul>
      <hr/>
      {/* 현재 경로에 따라 다른 컴포넌트 보여주기 */}
      <Route path="/" component={Home} exact={true}/> 
      <Route path={['/about', '/info']} component={About}/>
      <Route path="/profile/:username" component={Profile}/>
    </div>
  );
};

export default App;
