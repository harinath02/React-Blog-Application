import { Link } from 'react-router-dom';
import './topbar.css';

function TopBar() {

  const user = false;

  return (
    <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fa-brands topIcon fa-square-facebook"></i>
      <i className="topIcon fa-brands topIcon fa-square-x-twitter"></i>
      <i className="topIcon fa-brands topIcon fa-square-pinterest"></i>
      <i className="topIcon fa-brands topIcon fa-square-instagram"></i>
        </div>
      <div className='topCenter'>
        <ul className="topList">
            <li className='topListItem'>
            <Link className='link' to={'/'}>HOME</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to={'/'}>ABOUT</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to={'/contact'}>CONTACT</Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to={'/write'}>WRITE</Link>
            </li>
            <li className='topListItem'>
            {user && "LOGOUT"}
            </li>
        </ul>
        </div>
      <div className='topRight'>
        {
          user ? (
            <img className='topImg' src='https://img.freepik.com/premium-photo/simple-smile-happy-man-digital-portrait-bright-red-background_96461-13315.jpg?w=740' alt=''/>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                 <Link className='link' to={'/login'}>
                    LOGIN
                 </Link>
              </li>
              <li className='topListItem'>
                 <Link className='link' to={'/register'}>
                    REGISTER
                 </Link>
              </li>
            </ul>
          )
        }
        <i className="topSearchIcon fas topIcon fa-search"></i>
        </div>
    </div>
  )
}

export default TopBar;
