import {Route, Link, Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
//import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

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
        <li>
          <Link to="/history">History Sample</Link>
        </li>
      </ul>
      <hr/>
      {/* 현재 경로에 따라 다른 컴포넌트 보여주기 */}
      <Switch>
      <Route path="/" component={Home} exact={true}/> 
      <Route path={['/about', '/info']} component={About}/>
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
      <Route render={({location}) => (
        <div>
          <h2>This page does not exist</h2>
          <p>{location.pathname}</p>
        </div>
      )}
      />
      </Switch>
    </div>
  );
};

export default App;
