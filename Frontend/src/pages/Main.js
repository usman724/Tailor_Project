import React ,{useState,useEffect}from 'react'
import { BrowserRouter,Routes,Link, Route,useNavigate  } from 'react-router-dom';


import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar/index'
import Dashboard from './Dashboard';
import Profile from './profile/Profile';

function Main() {
    const [showNavBar, setShowNavBar] = useState(false);
    const [login, setLogin] = useState(true);
    const [showSidebar, setShowSidebar] = useState(true);
    const [authenticated, setAuthenticated] = useState(true);

    
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  function isMobile() {
    const screenWidth = window.innerWidth;
    return screenWidth < 768;
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNavBar(true);

      if (isMobile()) {
        setShowSidebar(!setShowSidebar);
      }
    });
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
    {showNavBar && <NavBar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />}
      <div className="flex">
      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />}
        <main className="flex-grow">
        
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default Main