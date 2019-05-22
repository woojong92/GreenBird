import React from 'react'; //next에서는 안써도 되지만, 구조상 결국 써야한다. 
import Link from 'next/link'; // next에서 link 만들기

const Home = () => {
    return (
        <>
            <Link href="/about"><a>about</a></Link>
            <div>Hello, Next!</div>
        </>
    );
};

export default Home;