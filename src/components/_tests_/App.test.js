import React from 'react';
import {Route} from 'react-router';
import {shallow} from 'enzyme';
const raf = require('raf');
import Home from '../components/Home';
import App from '../components/App';
describe('<App>',()=>{
    const wrapper= shallow(<App/>);
    it('renders Router',()=>{
        // console.log(wrapper.debug());
        expect(wrapper.find('BrowserRouter').length).toBe(1);
        });
    it('renders Link',()=>{
        // console.log(wrapper.debug());
        expect(wrapper.find('Link').length).toBe(3);
        });
    it('renders Route',()=>{
    // console.log(wrapper.debug());
    expect(wrapper.find('Route').length).toBe(3);
    });
    it('render correct route',()=>{
        const pathMap = wrapper.find(Route).reduce((pathMap,route)=>{
            const routeProps = route.props();
            pathMap[routeProps.path]=routeProps.component;
            return pathMap;
        },{});
        expect(pathMap['/']).toBe(Home);
    });
});