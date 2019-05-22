import React from 'react'; //next에서는 안써도 되지만, 구조상 결국 써야한다. 
import Link from 'next/link'; // next에서 link 만들기
import Head from 'next/head';
import AppLayout from '../components/AppLayout';


const Home = () => {
    return (
    <>
        <Head>
            <title>GreenBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js" />
        </Head>
        <AppLayout>
            <Link href="/about"><a>about</a></Link>
            <div>Hello, Next!</div>
        </AppLayout>         
    </>
    );
};

export default Home;