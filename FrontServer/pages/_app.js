import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';

import { createStore} from 'redux';
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

// 
export default withRedux((initialState, option) => {
    const store = createStore(reducer, initialState);
    // 여기에다가 store 커스텀마이징
    return store;
})(GreenBird); // 기존 컴포넌트의 기능을 확장!

