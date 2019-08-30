import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from './LoginForm';
import { Content } from 'native-base';


export class LoginPage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text>Login</Text>
        };
    };

    onSignIn = (values) => {
        console.log(values);
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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
