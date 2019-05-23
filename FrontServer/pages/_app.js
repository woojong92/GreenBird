import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prrop-types';

const GreenBird = ( {Component }) => {
    return (
        <>
            <Head>
                <title>GreenBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js" />
            </Head>
            <AppLayout>
                < Component /> 
            </AppLayout>
        </>
    );
};

GreenBird.PropTypes = {
    Components: PropTypes.elementType,
};

export default GreenBird;