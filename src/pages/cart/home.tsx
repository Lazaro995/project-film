import { Grid, Text, Card } from '@nextui-org/react';
import React from 'react'
import { Link } from 'react-router-dom'
import { CarouselHome } from '../../components/CarouselHome';

function Home() {
  return (
    <div><p>This is the home page</p>
      <Link to='/cart'>GA</Link>
      <CarouselHome />
    </div>
  )
}


export default Home