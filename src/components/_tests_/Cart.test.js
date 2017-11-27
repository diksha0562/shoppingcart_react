import React from 'react';
import {shallow} from 'enzyme';
import Cart from '../components/Cart';
describe('<Cart>/',()=>{
    const wrapper = shallow(<Cart cart_data={[{product_type:'dress', price : '499'},{product_type:'top', price : '599'}]}/>);
    it('cart page',()=>{
        console.log(wrapper.debug());
    })
})