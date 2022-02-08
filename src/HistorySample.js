import { Component } from "react";

class HistorySample extends Component{
    //go back
    handleGoBack = () => {
        this.props.history.goBack();
    };

    //go home
    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount(){
        this.unblock = this.props.history.block('Do you want to exit?');
    }

    componentWillMount(){
        //컴포넌트가 언마운트되면 질문을 멈춤
        if(this.unblock){
            this.unblock();
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.handleGoBack}>Back</button>
                <button onClick={this.handleGoHome}>Home</button>
            </div>
        );
    }
}

export default HistorySample;