import React from 'react';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    handleClear(){
        sessionStorage.setItem('cart_data',null);
        this.setState({items:[]});
        sessionStorage.setItem('cart_counter',JSON.stringify(0));
    }
    handleCheckout(){
        let items = this.state.items;
        let sum=0;
        items.map((value,index)=>{
            sum +=parseInt(value.price);
            return sum; 
        });
        console.log('sum ',sum);
        alert('total amount is '+sum);
    }
    handleDelete(deleteindex){
        if(confirm('Do you want to delete?')){
            let afterdelete = (this.state.items).filter(item=>
            item.key!=deleteindex);
            this.setState({items:afterdelete});
            let  cartcounter;
            cartcounter = parseInt(JSON.parse(sessionStorage.getItem("cart_counter")));  
            sessionStorage.setItem('cart_counter',JSON.stringify(cartcounter-1));
        }
    }

    componentWillMount(){
       this.setState({items:JSON.parse(sessionStorage.getItem("cart_data"))});
    }
    render(){
        let cart_data_=this.state.items;
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