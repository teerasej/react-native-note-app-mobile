import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import {  Content, Text, Button, Item, Input, Label } from 'native-base';
import { Formik } from 'formik';
import { actionTypes, createNewNote } from '../../redux/actions';
import { useDispatch } from 'react-redux';


export default function NewNotePage(props) {

  const dispatch = useDispatch()

  return (
    <Content padder>
      <View>
        <Formik
          initialValues={{ message: '' }}
          onSubmit={
            values => {
              console.log(values)
              dispatch(createNewNote(values.message));
              // dispatch({
              //   type: actionTypes.SAVE_NEW_NOTE,
              //   payload: values.message
              // })
              props.navigation.goBack()
            }
          }
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Item inlineLabel >
                <Label>Message: </Label>
                <Input
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

