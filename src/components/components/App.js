import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Women from './Women';
import Home from './Home';
import Cart from './Cart';
class App extends React.Component {
    constructor(props){
        super(props);
        this.onCartChange = this.onCartChange.bind(this);
        this.onCartClear = this.onCartClear.bind(this);
        this.onCartDelete = this.onCartDelete.bind(this);
        this.state={
            cart_data:[]
        }
    }
    onCartChange(cart_data){
        this.setState({cart_data});
    }
    onCartClear(cart_data){
        this.setState({cart_data});
    }
    onCartDelete(cart_data){
        this.setState({cart_data});
    }
   render() {
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
                <Route exact path='/Women' render={(props)=>(<Women cart_data={this.state.cart_data} onCartChange={this.onCartChange}/>)}/>
                <Route exact path='/cart' render={(props)=>(<Cart cart_data={this.state.cart_data} onCartClear={this.onCartClear} onCartDelete={this.onCartDelete}/>)}/>
            </Switch>
         </div>
         </Router>
        
         </div>
      );
   }
}
export default App;