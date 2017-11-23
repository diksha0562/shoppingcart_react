import React from 'react';
import axios from 'axios';
import Women_Table from './Women_Table';
class Women extends React.Component{
    constructor(props){
        super(props);
        this.state={
            women_data:['hggh']
        };
    }
    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/diksha0562/shoppingcart_react/master/src/data/data.json')
        .then(response=>{
                 this.setState({women_data:response.data})
        }).catch(e=>console.log(e));
    }
    render(){
        return(
            <div>
                <h2>Women Wear</h2>
                <Women_Table women_data={this.state.women_data} onCartChange={this.props.onCartChange} cart_data={this.props.cart_data}/>
            </div>
        )
    }
}
export default Women;