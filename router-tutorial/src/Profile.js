import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    liliana:{
        name: 'Liliana',
        description:'리액트 배우고 있는 백엔드 개발자'
    },
    benny:{
        name: '베니',
        description: '깡총깡총'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;//match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어있다.
    const profile = data[username];
    if(!profile){
        return <div>Not found</div>;
    }
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    );
};

export default withRouter(Profile);