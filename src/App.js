import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect from='/' to='/signup' />
      </Switch>
    </div>
  );
}

export default App;
