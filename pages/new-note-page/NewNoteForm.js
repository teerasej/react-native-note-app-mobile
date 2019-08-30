import React, { Component } from 'react'
import { View } from 'react-native'
import {  Text, Button, Item, Input, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';

export class NewNoteForm extends Component {

    renderInput({ input, label, type, meta: { touched, error, warning } }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError}>
                <Input {...input} />
                {hasError ? <Text>{error}</Text> : <Text />}
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

NewNoteForm = reduxForm({ form: 'test' })(NewNoteForm)

export default NewNoteForm
