import {NavLink, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };
    return(
        <div>
            <h3>User List:</h3>
            <ul>
                <li>
                <NavLink activeStyle={activeStyle} to="/profiles/liliana">liliana</NavLink>
                </li>
                <li>
                <NavLink activeStyle={activeStyle} to="/profiles/benny">benny</NavLink>
                </li>
            </ul>
      <Route path="/profiles" exact render={() => <div>Please select User.</div>} />{/* 컴포넌트에 props 별도로 넣어주고 싶을때 사용 exact={true}와 같은 의미 */}
      <Route path="/profiles/:username" component={Profile}/>
      </div>
    );
};

export default Profiles;