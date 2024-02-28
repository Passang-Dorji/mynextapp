"use client"
import Lyrics from './lyrics';

const Home = () => {
  return (
    <div className='bg-red-300	'>
      <h1 className='text-center text-3xl text-blue'>Welcome to My Lyrics Website</h1>
      <Lyrics />
    </div>
  );
};

export default Home;
