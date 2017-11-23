import React from 'react';
class Women_Table extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            count: 0
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(product,item_price,index,counter){
        let  itemcounter;
        itemcounter = parseInt(JSON.parse(sessionStorage.getItem("item_counter")));  
        console.log('item_counter',itemcounter);
        if(itemcounter)
            sessionStorage.setItem('item_counter',JSON.stringify(itemcounter+1));
        else
            sessionStorage.setItem('item_counter',JSON.stringify(1));
        itemcounter = parseInt(JSON.parse(sessionStorage.getItem("item_counter"))); 
        let newitem=[{product_type:product,price:item_price,key: itemcounter}];
        
        // let cartdata = [];
        // cartdata = JSON.parse(sessionStorage.getItem("cart_data"));   
        // if(cartdata)

        //     sessionStorage.setItem('cart_data',JSON.stringify(newitem.concat(cartdata)));
        // else
        //     sessionStorage.setItem('cart_data',JSON.stringify(newitem));
        let cartdata= [];
        cartdata=this.props.cart_data;
        if(cartdata)
        cartdata=cartdata.concat(newitem);
        else
        cartdata=newitem;
        this.props.onCartChange(cartdata);
        
        let  cartcounter=0;
        cartcounter = parseInt(JSON.parse(sessionStorage.getItem("cart_counter")));  
        if(cartcounter)
            sessionStorage.setItem('cart_counter',JSON.stringify(cartcounter+1));
        else
            sessionStorage.setItem('cart_counter',JSON.stringify(1));
        cartcounter = parseInt(JSON.parse(sessionStorage.getItem("cart_counter"))); 
            console.log('cartcounter',cartcounter);
            this.setState({count:cartcounter});
            
        
    }
    render(){
        console.log('props: ',this.props);
        console.log('counter',JSON.parse(sessionStorage.getItem("cart_counter")));
        return(
          <div>
             {/* <h3>Number of items in cart {this.state.count}</h3>   */}
             <h3>Number of items in cart {JSON.parse(sessionStorage.getItem("cart_counter"))}</h3> 
           <table className='womentable'> 
                <tr>
                   <th>Product Type</th>
                   <th>Price</th>
                   <th>Image</th>
                </tr>
               {this.props.women_data.map((obj,index)=>{
                    return (
                            <tr key={index}>
                              <td>{obj.product_type}</td>
                              <td>{obj.price}</td>
                              <td><img src={obj.image}/></td>
                              <input type="button" value="Add to Cart" onClick={e=>this.handleClick(obj.product_type,obj.price,index,this.state.count)}/>
                            </tr>
                    );
                })}
            </table> 

          </div>
        )
    }
}
export default Women_Table;