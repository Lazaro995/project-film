import { Link } from 'react-router-dom'
import { CarouselHome } from '../../components/CarouselHome/index'
import Profile from '../../components/profile/index.tsx'
import Form from '../../components/form/index.tsx'
const userImage = 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png'

function Home() {
  return (
    <div><p>This is the home page</p>
      <Link to='/cart'>GA</Link>
      <Form />
      <Profile userImage= {userImage} />
      <CarouselHome />
    </div>
  )
}


export default Home