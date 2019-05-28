export const initialState = {
    mainPosts: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
};

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'HELLO',
        UserId: 1,
        User: {
            nickname: '레드샤크'
        },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.tpye) {
        case ADD_POST : {
            return {
                ...state,
            };
        }
        case ADD_DUMMY : {
            return {
                ...state,
                mainPosts:[action.data, ...state.mainPosts],
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;