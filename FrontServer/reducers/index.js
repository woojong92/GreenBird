// state 구조 잡는 건 경험이 많이 쌍여야 잘 잡을 수 있다.
// 루트 리듀서, 부모리듀서
import { combineReducers } from'redux';
import user from './user';
import post from './post';


const rootReducer = combineReducers( {
    user,
    post,
});

export default rootReducer;