import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Switch,
  Router,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
   <Topbar/>
   <Switch>
   <Route path="/">
    <Home/>
   </Route>
   </Switch>
   </Router>
  );
}

export default App;
