# Redux

- React에서 전역상태를 관리하기 위한 상태 컨테이너
- Obesrver Pattern: store 상태가 바뀔때마다 즉, reducer가 새로운 상태 객체를 반환할때마다 listener(callback) 호출

### 구성요소
- store: 전역상태가 저장되는 곳, 어디서든 접근 가능. reducer를 관찰하고 있다. createStore(리듀서명)
- reducer: store 안에 있다. store의 값을 바꾸는 주체, entry point. 코드 확인할때 먼저 체크하면 좋음
- action 생성함수: 사용자가 발생시키는 것. action을 발생시킨다.
- action type: 개발자가 지정해 놓은 action 생성함수가 반환하는 값

### 동작 흐름
1. 사용자가 action을 발생시키면 dispatch 함수를 실행시킨다. 
2. 지정된 action type을 reducer에 전달한다.
3. reducer에서는 action type에 따라 분기처리, return 새로운 상태값 
4. store의 state값 변경
5. store의 state 값과 비교해서 변경되었으므로 callback 호출 
6. 화면 리렌더링

### 적용
- 컴포넌트에서 redux store에 접근하여 원하는 상태를 받아오고(store.getState), 액션을 dispatch 해주어야 하는데, 이렇게 하려면 **Container Component**안에서 상태와 dispatch를 connect()로 wrapping을 해주어야 함
- 이 connect 함수를 통해 타겟 Component로 전달이 되고, return JSX(Presentational)