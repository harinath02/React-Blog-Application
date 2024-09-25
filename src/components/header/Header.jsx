import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src='https://i.redd.it/nu0zh5lqwj631.jpg' alt=''/>
    </div>
  )
}
