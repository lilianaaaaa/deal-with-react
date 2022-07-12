import React, {Component} from 'react';

class EventPractice extends Component{

    state = {
        username: '',
        message: ''
    }

    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="username" placeholder="사용자명" onChange={this.handleChange} value={this.state.username}/>
                <input type="text" name="message" placeholder="입력해주세요" onChange={this.handleChange} value={this.state.message}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }

    // render(){
    //     return (
    //         <div>
    //             <h1>이벤트 연습</h1>
    //             <input type="text" name="message" placeholder="입력해주세요" onChange={
    //                 (e) => {
    //                     //console.log(e);//e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체. 이벤트 끝나면 이벤트 초기화
    //                     //console.log(e.target.value);
    //                     this.setState({
    //                         message: e.target.value
    //                     })//state에 텍스트를 담는다.
    //                 }
    //             }
    //             />
    //         </div>
    //     );
    // }
}
export default EventPractice;