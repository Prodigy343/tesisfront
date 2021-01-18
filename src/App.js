import './App.css';
import React, { useContext } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Events } from './components/Events';
import { Signup } from './views/Signup';
import { Forgot } from './views/Forgot';
import { Login } from './views/Login';
import { Home } from './views/Home';
import { Main } from './views/Main';
import { Context } from './Context';

function App() {

  const { userState } = useContext(Context);

  const guestRoutes = (
    <Switch>
      <Route exact path='/' render={() => <Redirect to="/login"></Redirect>} />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/forgot' component={Forgot}/>
    </Switch>
  );

  const userRoutes = (
    <Main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/events' component={Events}/>
        <Route exact path='/login' render={() => <Redirect to="/"></Redirect>} />
        <Route component={() => <h1>Not found</h1>} />
      </Switch>
    </Main>
  );

  return (
    <div className="App">
      <BrowserRouter>
        { userState ? userRoutes : guestRoutes }
      </BrowserRouter>
    </div>
  );
}

export default App;
