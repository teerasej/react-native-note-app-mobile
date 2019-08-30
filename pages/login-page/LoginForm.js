import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { Text, Button, Item, Input, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';

export class LoginForm extends Component {

    renderInput({ input, label, type, meta: { touched, error, warning } }) {

        console.log('rendering');
        console.log(input, type);

        var hasError = false;
        if (error !== undefined && touched) {
            hasError = true;
            Alert.alert(
                'Opps',
                error
            );
        }
        return (
                <Item error={hasError}>
                    { type === 'password' ?  <Input {...input} secureTextEntry={true}/> : <Input {...input}/>}
                </Item>
        )
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <View>
                <Item stackedLabel >
                    <Label>Username: </Label>
                    <Field name="username" component={this.renderInput} />
                </Item>
                <Item stackedLabel last>
                    <Label>Password: </Label>
                    <Field name="password" type="password" component={this.renderInput} />
                </Item>
                <Button block primary onPress={handleSubmit} >
                    <Text>Sign in</Text>
                </Button>
            </View>
        )
    }
}

const validate = values => {

    const error = {};
    error.username = '';
    error.password = '';

    let username = values.username;
    let password = values.password;

    if (values.username === undefined) {
        username = ''
    }
    if (values.password === undefined) {
        password = ''
    }

    if (password === '') {
        error.password = 'fill something';
    }
    if (password === '') {
        error.password = 'fill something';
    } 

    return error;
};

LoginForm = reduxForm({ form: 'login', validate })(LoginForm)

export default LoginForm
