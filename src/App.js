import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/Profilelayout/ProfileLayout";
//import Login from "./components/Login/Login";


function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ isLoggedIn ?  ProfileLayout : AuthLayout } />

      </Switch>
    </Router>
  );
}

export default App;
