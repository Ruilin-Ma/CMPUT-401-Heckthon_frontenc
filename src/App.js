import './App.css';
import { HashRouter as Router , Switch , Route, Redirect} from 'react-router-dom';
import React from 'react'
import Frame from './frames/index'
import { mainRoutes, dashBoardRoutes  } from './routes';

function App() {
  return (
    <Frame>
      <Switch>
      {dashBoardRoutes.map(route=>{
          return(
            <Route 
              key={route.path} 
              exact={route.exact} 
              path={route.path} 
              render={routeProps=>{
                return <route.component{...routeProps} />
              }}
            />
          )
        })}
        <Redirect to='/404' />
      </Switch>
    </Frame>
  ) 
}

export default App;
