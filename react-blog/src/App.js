import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import { 
  BrowserRouter as Router, 
  Route,
   Routes,
  Link
 } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
      <Route  path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<PrivateRoutes/>}>
       
        <Route path="settings" element={<Settings/>} />
        <Route path="write" element={<Write/>} />
        <Route path="post/:postId" element={<Single/>} />
        </Route>
       
      </Routes>
      </Router>
  );
}

export default App;
