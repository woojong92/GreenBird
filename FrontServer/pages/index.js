import React from 'react'; //next에서는 안써도 되지만, 구조상 결국 써야한다. 
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
    isLoggedIn : true,
    imagePaths :[],
    mainPost: [{
        User : {
            id: 1,
            nickname: 'ggg',
        },
        content:'첫 번째 게시글',
        img: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjNzK7357riAhUNxIsBHW90AVIQjRx6BAgBEAU&url=http%3A%2F%2Fanunnaki.egloos.com%2F6175663&psig=AOvVaw0wZwuk-J6LXcrrjlCIfcK2&ust=1559015626353972',
    }],
};


const Home = () => {
    return (
    <div>
        {dummy.isLoggedIn &&  <PostForm />}
        {dummy.mainPost.map( (c) => {
            return (
                <PostCard key={c} post={c} />
            );
        })}
    </div>
    );
};

export default Home;