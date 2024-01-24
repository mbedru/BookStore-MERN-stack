import { Link } from 'react-router-dom' 
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ destination = '/' }) => {
  return (
    <Link 
    to={destination} 
    className='bg-sky-800 text-black px-8 py2 rounded-lg w-fit'
    >
    <BsArrowLeft className='text-2xl' />
    </Link>
  )
}

export default BackButton