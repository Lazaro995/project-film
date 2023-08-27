import { Link } from 'react-router-dom'
import { CarouselHome } from '../../components/CarouselHome/index'
import Profile from '../../components/profile/index.tsx'
import Form from '../../components/form/index.tsx'
import { useState } from 'react'
const userImage = 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png'

function Home() {
  const [buttonVariant, setButtonVariant] = useState<string>('red')
  return (
    <div><p>This is the home page</p>
      <Link to='/cart'>GA</Link>
      <Form />
      <Profile userImage= {userImage} />
      <CarouselHome />
      <button onClick={()=>setButtonVariant('giant')} className={`button button-colored-${buttonVariant}`} >gaa</button>
    </div>
  )
}


export default Home