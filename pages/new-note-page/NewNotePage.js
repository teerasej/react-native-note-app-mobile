import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button, Item, Input, Label } from 'native-base';
import actions from "./../../redux/actions";
import NewNoteForm from './NewNoteForm';

export class NewNotePage extends Component {
  
  static navigationOptions = {
    title: 'New Note'
  };

  onFormSave = (values) => {
    console.log(values);
    this.props.createNewNote(values.message);
    this.props.navigation.goBack();
  }


  render() {
    return (
      <Content padder>
        <NewNoteForm onSubmit={this.onFormSave}/>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => {
  return {
    createNewNote: (message) => dispatch(actions.createNewNote(message))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewNotePage)
