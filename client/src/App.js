import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./single/Single";
import Register from "./pages/register/Register";
import TopBar from "./topbar/TopBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const user= false;
  return (
    <Router>
      <TopBar />
           <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="register" element={user?<Home/>:<Register />} />
        <Route path="login" element={user?<Home/>:<Login/>} />
        <Route path="settings" element={user?<Settings/>:<Register/>}/>
        <Route path="write" element={user?<Write/>:<Register/>}/>
        <Route path="post/:postId" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
