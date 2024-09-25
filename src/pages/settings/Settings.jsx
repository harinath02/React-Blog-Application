import './settings.css';
import Sidebar from './../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className='settings'>
       <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
            src="https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1693407136044-G90XQURX1GABMYGAS8K1/shutterstock_1288634614.jpg?format=2500w" 
            alt="" 
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder='Safak'/>
          <label>Email</label>
          <input type="email" placeholder='safak@gmail.com'/>
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
       </div>
       <Sidebar/>
    </div>
  )
}
