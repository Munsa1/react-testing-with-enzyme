import React from 'react';
import Header from './Header'
import { shallow } from 'enzyme';

describe('Group my tests', ()=>{
    it('Should render without error',()=>{
        const component = shallow(<Header />);
    })
})