import React, {Component} from 'react';

class RefSample extends Component{
    input = React.createRef();//컴포넌트 내부에서 멤버변수로 React.createRef()를 담아준다.

    handleFocus = () => {
        this.input.current.focus();//나중에 ref를 설정해준 DOM에 접근해서 focus()
    }

    render(){
        return(
            <div>
                <input ref={this.input}/>
            </div>
        )
    }
}

export default RefSample;