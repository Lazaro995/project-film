import { Link } from 'react-router-dom'
import { CarouselHome } from '../../components/CarouselHome/index'

function Home() {
  return (
    <div><p>This is the home page</p>
      <Link to='/cart'>GA</Link>
      <CarouselHome />
    </div>
  )
}


export default Home