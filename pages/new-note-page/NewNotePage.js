import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import {  Content, Text, Button, Item, Input, Label } from 'native-base';
import { Formik } from 'formik';


export class NewNotePage extends Component {


  render() {
    return (
      <Content padder>
        <View>
          <Formik
            initialValues={{ message: '' }}
            onSubmit={
              values => {
                console.log(values)
              }
            }
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <Item inlineLabel >
                  <Label>Message: </Label>
                  <TextInput
                    onChangeText={handleChange('message')}
                    onBlur={handleBlur('message')}
                    value={values.message}
                  />
                </Item>
                <Button block primary onPress={handleSubmit} >
                  <Text>Save</Text>
                </Button>
              </View>
            )}
          </Formik>
        </View>
      </Content>
    )
  }
}

export default NewNotePage
