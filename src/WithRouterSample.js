import { withRouter } from "react-router-dom";
const WithRouterSample = ({location, match, history}) => {
    return(
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true}/>{/* JSON.stringfy의 두번째 파라미터, 세번째 파라미터 null, 2 로 설정 시 JSON에 들여쓰기가 적용된 상태로 문자열이 만들어짐 */}
            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} rows={7} readOnly={true}/>
            <button onClick={() => history.push('/')}>Home</button>
        </div>
    );
};

export default withRouter(WithRouterSample);//HoC (Higer-order Component) 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해준다.