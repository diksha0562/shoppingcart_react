import React from 'react';
import {read_cookie, delete_cookie} from 'sfcookies';
import {cookie_key} from './Women_Table';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    handleClear(){
        sessionStorage.setItem('cart_data',null);
    }

    // componentDidMount(){
    //     // this.setState({items:read_cookie(cookie_key)});
    //    this.setState({items:JSON.parse(sessionStorage.getItem("cart_data"))});
    //    console.log('state of cart items',JSON.parse(sessionStorage.getItem("cart_data")));
    // }
    render(){
        let cart_data_=JSON.parse(sessionStorage.getItem("cart_data"));
        return(
            <div>
                <h2>CART</h2>
                {cart_data_!=null?
                <table>
                {cart_data_.map((item,index)=>{
                    return <li key={index}>{item.product_type}{item.price}</li>
                })}
                </table>:<div/>
                }
                <input type='button' value='clear' onClick={e=>this.handleClear()}/>
            </div>
        )
    }
}

export default Cart;