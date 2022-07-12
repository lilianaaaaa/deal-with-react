import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true //문자열 맨 앞의 ?를 생략
    });
    const showDetail = query.detail === 'true'; //쿼리의 파싱 결과 값은 문자열. 숫자를 받아와야 하면 parseInt 함수를 통해 숫자로 변환해 주고, 논리 자료형 값을 사용하는 경우에는 정확히 “true” 문자열과 일치하는지 비교
    return (
        <div>
            <h1>소개</h1>
            <p>react router basic study project</p>
            {showDetail && <p>detail value set true!</p>}
        </div>
    );
};

export default About;