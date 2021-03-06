import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        {/* Your links should go here */}
        <NavLink to="/red">Red</NavLink>
        <NavLink to="/blue">Blue</NavLink>
        <NavLink to="/green">Green</NavLink>
        <NavLink to="/violet">Violet</NavLink>

        <div id="rainbow">
          <Route path="/blue" component={Blue} />
          <Route path="/violet" component={Violet} />
          <Route path="/green" component={Green} />          
          <Route path="/red" component={Red} />
        </div>
      </div>
    );
  }
};

export default Rainbow;
