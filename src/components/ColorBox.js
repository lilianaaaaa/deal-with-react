import {ColorConsumer} from "../contexts/color";

const ColorBox = () => {
    return (
        <ColorConsumer>
        {/* Render Props: 컴포넌트의 children이 있어야 할 자리에 함수를 전달 */}
            {({state}) => (
                <>
                <div 
                    style={{
                        width: '64px', 
                        height: '64px', 
                        background: state.color
                    }}
                />
                <div 
                    style={{
                        width: '32px', 
                        height: '32px', 
                        background: state.subcolor
                    }}
                />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;