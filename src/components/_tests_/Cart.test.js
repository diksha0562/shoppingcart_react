import React from 'react';
import {shallow, mount} from 'enzyme';
import Cart from '../components/Cart';
require('jest-localstorage-mock');
describe.only('<Cart>/',()=>{
    const baseProps = {
        cart_data : [{product_type:'dress', price : '499'},{product_type:'top', price : '599'}],
        onCartClear: jest.fn(),
        onCartDelete : jest.fn()
    }
      const wrapper = shallow(<Cart {...baseProps}/>);
    it('renders cart',()=>{
        expect(wrapper.find(Cart)).toBeDefined();
    });
    it('handle checkout function call',()=>{
       
          expect(wrapper.find('.checkout-btn')).toBeDefined();
         // wrapper.instance().handleCheckout();
          expect(wrapper.instance().props.cart_data).toEqual([{product_type:'dress', price : '499'},{product_type:'top', price : '599'}]);
        wrapper.find('.checkout-btn').simulate('click'); 

    });
    it('clear button functions check',()=>{
        const KEY = 'cart_counter',
        VALUE = '0';
        expect(wrapper.find('.clear-btn')).toBeDefined();
         wrapper.find('.clear-btn').simulate('click', {cart_data:[], onCartClear: jest.fn()});
         expect(sessionStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
        
         expect(sessionStorage.__STORE__[KEY]).toBe(VALUE);
         expect(Object.keys(sessionStorage.__STORE__).length).toBe(1);
        // expect(wrapper.instance().props.cart_data).toEqual([]);
        //expect(baseProps.onCartClear).toHaveBeenCalledTimes(1);
       // expect(baseProps.onCartClear).toHaveBeenCalledWith([]);
    });
    it('handle delete button',()=>{
       // expect(wrapper.find(button)).toBeDefined();
       const confirm = true ;
      expect(wrapper.find('.delete-btn').length).toBe(2);
      wrapper.find('.delete-btn').at(0).simulate('click');
      wrapper.instance().handleDelete(0);

      expect(wrapper.find('.delete-btn').length).toBe(2);
     // expect(wrapper.instance().props.cart_data).toBe([{product_type:'top', price : '599'}]);
        //wrapper.find('.delete-btn')[0].simulate('click',{});
    });
    
})
