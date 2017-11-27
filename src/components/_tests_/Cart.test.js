import React from 'react';
import {shallow} from 'enzyme';
import Cart from '../components/Cart';
global.window = {};
import localStorage from 'jest-localstorage-mock';
window.localStorage = global.localStorage;
describe.only('<Cart>/',()=>{
    const mockclear = jest.fn;
    const wrapper = shallow(<Cart cart_data={[{product_type:'dress', price : '499'},{product_type:'top', price : '599'}]}/>);
    // it('cart page',()=>{
    //     //console.log(wrapper.debug());
    // });
    it('handle checkout function call',()=>{
        expect(wrapper.find('.checkout-btn').length).toBe(1);
        console.log(wrapper.instance().props);
       // expect(sessionStorage.getItem('cart_counter')).toEqual(0);
      expect(wrapper.instance().props.cart_data).toEqual([{product_type:'dress', price : '499'},{product_type:'top', price : '599'}]);
        wrapper.find('.checkout-btn').simulate('click');
       // expect(wrapper.find('.clear-btn').props().cart_data).toBe([]);
        
    })
})