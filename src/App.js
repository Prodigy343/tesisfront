import './scss/base.scss'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { List as DependencyList } from './views/admin/dependencies/list'
import { List as EventTypeList } from './views/admin/eventTypes/list'
import { Create as EventTypeCreate } from './views/admin/eventTypes/Create'
import { Edit as EventTypeEdit } from './views/admin/eventTypes/Edit'
import { Profile } from './views/profile/'
import { Events } from './views/events/'
import { Signup } from './views/signup/'
import { Forgot } from './views/forgot/'
import { Login } from './views/login/'
import { Home } from './views/home/'
import { Main } from './views/main/'
import { useUserStore } from './store/user'

function App() {

  const user = useUserStore((state) => state.user)

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
        <Route exact path='/dependency-list' component={DependencyList}/>
        <Route exact path='/event-type-list' component={EventTypeList}/>
        <Route exact path='/event-type-create' component={EventTypeCreate}/>
        <Route exact path='/event-type-edit' component={EventTypeEdit}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/login' render={() => <Redirect to="/"></Redirect>}/>
        <Route component={() => <h1>Not found</h1>} />
      </Switch>
    </Main>
  );

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <BrowserRouter>
          { user.token.length === 0 ? guestRoutes : userRoutes }
        </BrowserRouter>
      </div>
    </SnackbarProvider>
  );
}

export default App;
