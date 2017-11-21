import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Women from './Women';
import Home from './Home';
class App extends React.Component {
   render() {
      return (
          <Router>
         <div>
            <ul>
                <li><Link to ={'/'}>Home</Link></li>
                <li><Link to ={'/Women'}>Women wear</Link></li>
            </ul>
            <hr/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Women' component={Women}/>
            </Switch>
         </div>
         </Router>
      );
   }
}
export default App;