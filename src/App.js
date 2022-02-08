import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
//import Profile from './Profile';
import Profiles from './Profiles';

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
          <Link to="/profiles">Profiles</Link>
        </li>
      </ul>
      <hr/>
      {/* 현재 경로에 따라 다른 컴포넌트 보여주기 */}
      <Route path="/" component={Home} exact={true}/> 
      <Route path={['/about', '/info']} component={About}/>
      <Route path="/profiles" component={Profiles}/>
    </div>
  );
};

export default App;
