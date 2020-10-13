import React, { Suspense } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes';


const App = () => {
  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "center", listStyle: "none" }}>
        {routes.map(({ path, exact, name }) =>
          <li className="listItem" key={name} style={{ margin: "5px" }}>
            <NavLink
              to={path}
              className="link"
              activeClassName="activeLink"
              exact={exact} >
              {name}
            </NavLink>
          </li>
        )}
      </ul>

      <div style={{ backgroundColor: "gray" }}>

        <Suspense fallback={<h2>...loading</h2>}>
          <Switch>
            {routes.map(({ path, exact, name, component }) =>
              <Route key={name} path={path} exact={exact} component={component} />
              // render={()=> <Home text="hello"}
            )}
            <Route component={() => <h2>Error</h2>} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;