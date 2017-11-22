import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Women from './Women';
import Home from './Home';
import Cart from './Cart';
class App extends React.Component {
   render() {
      return (
          <Router>
         <div>
            <ul>
                <li><Link to ={'/'}>Home</Link></li>
                <li><Link to ={'/Women'}>Women wear</Link></li>
                <li><Link to={'/cart'}>Cart</Link></li>
            </ul>
            <hr/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Women' component={Women}/>
                <Route exact path='/cart' component={Cart}/>
            </Switch>
         </div>
         </Router>
      );
   }
}
export default App;