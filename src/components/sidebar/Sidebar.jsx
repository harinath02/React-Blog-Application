import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://th.bing.com/th/id/OIP.nbpMZW-vbLrxw1EIeT2NyQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta repellat fuga at labore in odio nam quam sit suscipit harum autem consectetur.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarList'>
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
