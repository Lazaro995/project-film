import React from 'react'
import { Link } from 'react-router-dom'
import { CarouselHome } from '../../components/carouselHome';
import Profile from './profile';

function Home() {
  return (
    <div><p>This is the home page</p>
      <Link to='/cart'>GA</Link>
      <Profile />
      <CarouselHome />
    </div>
  )
}


export default Home