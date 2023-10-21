import Topbar from "./components/Topbar";
import Body from "./components/Body";
import {Route, Routes} from 'react-router-dom'
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div >

     {
      <Routes>
        <Route path="/" element ={<Body />} />
        <Route path= '/profile' element = {<Profile />} />
        <Route path= '/login' element = {<Login />} />
        <Route path= '/register' element = {<Register  />} />

   

      </Routes>
     }
   
    </div>
  );
}

export default App;
