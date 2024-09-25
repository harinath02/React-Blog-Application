import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/MySinglePost'


export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/> 
    </div>
  )
}
