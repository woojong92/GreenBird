import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';

import { createStore, compose, applyMiddleware} from 'redux';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux'; // Provider가 리액트 컴포넌트들의 중앙통제실 리덕스 스테이트를 제공
import reducer from '../reducers';
import { initialState } from '../reducers/post';

const GreenBird = ( {Component, store }) => { // 정확히는 store는 state,action, reducer가 합쳐진 것
    return (
        <Provider store={store} >
            <Head>
                <title>GreenBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js" />
            </Head>
            <AppLayout>
                < Component /> 
            </AppLayout>
        </Provider>
    );
};

GreenBird.propTypes = {
    Components: PropTypes.elementType,
    store : PropTypes.object,
};

// 틀 자체는 이대로 유지!
export default withRedux((initialState, option) => {
    const middlewares = []; // 이 부분만 바뀜

    const enhancer = compose(
        applyMiddleware(...middlewares),
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );

    const store = createStore(reducer, initialState, enhancer);

    return store;
})(GreenBird); // 기존 컴포넌트의 기능을 확장!

