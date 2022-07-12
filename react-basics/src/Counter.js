import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        //state의 초깃값 설정
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render(){
        const {number, fixedNumber} = this.state;//state 조회할때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={() => {
                    this.setState(
                        {
                            number: number + 1
                        },
                        () => {
                            console.log('방금 setState가 호출되었습니다.');
                            console.log(this.state);
                        }//setState 사용하여 값 업데이트하고난 다음 특정 작업 하고싶을때 setState의 두번째 파라미터로 콜백함수 활용
                        );//state에 새로운 값 넣기
                    //this.setState({number: this.state.number + 1});//두번 호출 -> state 값이 바로 바뀌지는 않기 때문에 그대로 1씩 증가
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });//2씩 증가
                }}>+1</button>
            </div>
        );
    }
}

export default Counter;