import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Women from './Women';
import Home from './Home';
import Cart from './Cart';
class App extends React.Component {
   render() {
       console.log('counter',JSON.parse(sessionStorage.getItem("cart_counter")));
      return (
          <div>
          <Router>
         <div>
            <div>
                <div className='link'><Link to ={'/'}>Home</Link></div>
                <div className='link'><Link to ={'/Women'}>Women wear</Link></div>
                <div className='link'><Link to={'/cart'}>Cart</Link></div>
            </div>
            <hr/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Women' component={Women}/>
                <Route exact path='/cart' component={Cart}/>
            </Switch>
         </div>
         </Router>
        
         </div>
      );
   }
}
export default App;