import React from 'react';
class Women_Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    handleClick(product,item_price){
       let newitem={product_type:product,price:item_price}
       let items = this.state.items;
        items.push(newitem);
        this.setState({items})
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