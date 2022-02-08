import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return(
        <div>
            <h3>User List:</h3>
            <ul>
                <li>
                <Link to="/profiles/liliana">liliana</Link>
                </li>
                <li>
                <Link to="/profiles/benny">benny</Link>
                </li>
            </ul>
      <Route path="/profiles" exact render={() => <div>Please select User.</div>} />{/* 컴포넌트에 props 별도로 넣어주고 싶을때 사용 exact={true}와 같은 의미 */}
      <Route path="/profiles/:username" component={Profile}/>
      </div>
    );
};

export default Profiles;