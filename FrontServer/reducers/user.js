// 초기 스테이트
export const initialState = {
    isLoggedIn: false,
    user : {},
};

// 액션
const LOG_IN = 'LOG_IN'; //액션의 이름
const LOG_OUT = "LOG_OUT";

const loginAction = { // 실제 액션
    type : LOG_IN,
    DATA: {
        nickname: '제로초',
    },
};

const logoutAction = {
    type: LOG_OUT,
};


// 리듀서
const reducer = (state = initialState, action) => {
 switch(action.type) {
     case loginAction : {
         return {
             ...state,
             isLoggedIn : true,
             user: action.data,
         }
     }
     case logoutAction : {
         return {
             ...state,
             isLoggedIn :false,
             user: null,
         }
     }
     default: {
         return{
             ...state,
         }
     }
 }
};

// ...state -> 불변성 때문에, 예전 스테이트와 지금 스테이트와 달라졌는지 체크
// 새로운 객체를 만들어... 스트레드 문법 사용.
// -> 지나치게 많이 쓰면 가독성이 떨어짐.
// 해결하기 위해 immutable이라 immur? 사용

export default reducer;
