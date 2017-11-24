import React from 'react';
class Women_Table extends React.Component{
    constructor(props){
        super(props);
                this.handleClick=this.handleClick.bind(this);
    }
    handleClick(product,item_price,index){
        let  itemcounter;
        itemcounter = parseInt(JSON.parse(sessionStorage.getItem("item_counter")));  
        if(itemcounter)
            sessionStorage.setItem('item_counter',JSON.stringify(itemcounter+1));
        else
            sessionStorage.setItem('item_counter',JSON.stringify(1));
         itemcounter = parseInt(JSON.parse(sessionStorage.getItem("item_counter"))); 
        
        let newitem=[{product_type:product,price:item_price,key: itemcounter}];
        let cartdata= [];
        cartdata=this.props.cart_data;
        if(cartdata)
            cartdata=cartdata.concat(newitem);
        else
            cartdata=newitem;
        this.props.onCartChange(cartdata);
    }
    render(){
        console.log('props: ',this.props);
        console.log('counter',JSON.parse(sessionStorage.getItem("cart_counter")));
        return(
          <div> 
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
                              <input type="button" value="Add to Cart" onClick={e=>this.handleClick(obj.product_type,obj.price,index)}/>
                            </tr>
                    );
                })}
            </table> 
          </div>
        )
    }
}
export default Women_Table;