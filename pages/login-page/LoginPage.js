import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from './LoginForm';
import { Content } from 'native-base';
import actions from '../../redux/actions';

export class LoginPage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text>Login</Text>
        };
    };

    onSignIn = (values) => {
        console.log(values);
        this.props.signIn(values.username, values.password);
    }

    render() {
        return (
            <Content padder>
                <LoginForm onSubmit={this.onSignIn} />
            </Content>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return {
        signIn: (username, password) => dispatch(actions.startSignIn(username,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
