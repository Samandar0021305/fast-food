import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Contacts from './pages/contacts/Contacts';
import {Switch ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home}  exact/>
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
