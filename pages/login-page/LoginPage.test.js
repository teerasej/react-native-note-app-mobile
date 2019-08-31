
import React from 'react';
import { LoginPage } from './LoginPage';
import { Provider } from "react-redux";
import configureStore from "./../../redux/store";
import renderer from 'react-test-renderer';

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

const store = configureStore();

describe('Name of the group', () => {

    it('renders without crashing', () => {
        const component = shallow(<LoginPage />);
    });

    test('snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <LoginPage />
            </Provider>
        ).toJSON();
        expect(component).toMatchSnapshot()
    });

    test('has LoginForm', () => {
        const component = shallow(<LoginPage />)
        const instance = component.instance();
        expect(instance.find('LoginForm')).toHaveLength(1);
    });


});
