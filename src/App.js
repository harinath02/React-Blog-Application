import {
   BrowserRouter as Router, 
   Route, 
   Routes 
} from 'react-router-dom';

import TopBar from "./components/topbar/TopBar";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Contact from './pages/contact/Contact';


function App() {

  // const user ='false';

  return (
    <Router>
      <TopBar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path='/write' element={<Write/>}/>
       <Route path='/settings' element={<Settings/>}/>
       <Route path='/post/:postId' element={<Single/>}/>
       <Route path='/contact' element={<Contact/>}/>
     </Routes>
     {/* <Contact/> */}
    </Router>
   );
}

export default App;
