import React from 'react'
import { shallow } from 'enzyme'

import Example from '../../../src/js/components/example.react'

describe('example', () => {

    it('should display the correct text', () => {
        const wrapper = shallow(<Example />);
        expect(wrapper.text()).to.equal('it works!');
    });
});