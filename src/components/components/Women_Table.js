import React from 'react';
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';
export const cookie_key = 'ITEMS';
class Women_Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    handleClick(product,item_price){
        let newitem={product_type:product,price:item_price}
        let items= this.state.items;
        let cartdata = [];
        cartdata = JSON.parse(sessionStorage.getItem("cart_data"));
        console.log('cartdata',cartdata)
        items.push(newitem);
        this.setState({items});
        if(cartdata)
        sessionStorage.setItem('cart_data',JSON.stringify(this.state.items.concat(cartdata)));
        else
        sessionStorage.setItem('cart_data',JSON.stringify(this.state.items));
        console.log('state',this.state.items);
    }
    render(){
        console.log('props: ',this.props);
        return(
          <div>
           <table>
               <tr>
                   <th>Product Type</th>
                   <th>Price</th>
                </tr>
               
               {this.props.women_data.map((obj,index)=>{
                    return (
                        <div >  
                        <span>
                            <tr key={index}>
                              <td>{obj.product_type}</td>
                              <td>{obj.price}</td>
                            </tr>
                        </span>
                        <span>
                            <input type="button" value="Add to Cart" onClick={e=>this.handleClick(obj.product_type,obj.price)}/>
                        </span>
                        </div>
                    );
                })
                }
            </table>
          </div>
        )
    }
}
export default Women_Table;