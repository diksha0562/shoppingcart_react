import React from 'react';
class Cart extends React.Component{
    constructor(props){
        super(props);
    }
    handleClear(){
        sessionStorage.setItem('cart_counter',JSON.stringify(0));
        this.props.onCartClear([]);
    }
    handleCheckout(){
        let items = this.props.cart_data;
        let sum=0;
        items.map((value,index)=>{
            sum +=parseInt(value.price);
            return sum; 
        });
        console.log('sum ',sum);
        alert('total amount is '+sum);
    }
    handleDelete(deleteindex){
        console.log('delete index',deleteindex);
        if(confirm('Do you want to delete?')){
            let afterdelete = (this.props.cart_data).filter(item=>
            item.key!=deleteindex);
            console.log('afterdelete',afterdelete);
           
            
            this.props.onCartDelete(afterdelete);
             }
    }
    render(){
        let cart_data_=this.props.cart_data;
        return(
            <div>
                <h2>CART</h2>
                {cart_data_!=null?
                <table>
                    <tr>
                       <th>Product Type</th>
                       <th>Price</th>
                    </tr>
                {cart_data_.map((item,index)=>{
                    return (
                    <tr key={index}>
                        <td>{item.product_type}</td>
                        <td>{item.price}</td>
                        <input type='button' value='Delete' onClick={e=>{this.handleDelete(item.key)}}/>
                    </tr>
                    );
                })}
                </table>:<div/>
                }
                <input type='button' value='clear' onClick={e=>this.handleClear()}/>
                <input type='button' value='check out' onClick={e=>this.handleCheckout()}/>
            </div>
        )
    }
}

export default Cart;