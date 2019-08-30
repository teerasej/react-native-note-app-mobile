import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { Text, Button, Item, Input, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';

export class NewNoteForm extends Component {

    renderInput({ input, label, type, meta: { touched, error, warning } }) {
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
                    <Input {...input} />
                </Item>
        )
    }


    render() {


        const { handleSubmit } = this.props;

        return (
            <View>
                <Item inlineLabel >
                    <Label>Message: </Label>
                    <Field name="message" component={this.renderInput} />
                </Item>
                <Button block primary onPress={handleSubmit} >
                    <Text>Save</Text>
                </Button>
            </View>
        )
    }
}

const validate = values => {

    const error = {};
    error.message = '';

    let newMessage = values.message;

    if (values.message === undefined) {
        newMessage = ''
    }

    if (newMessage === '') {
        error.message = 'fill something';
    } 

    return error;
};

NewNoteForm = reduxForm({ form: 'newNote', validate })(NewNoteForm)

export default NewNoteForm
