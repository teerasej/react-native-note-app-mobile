import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button, Item, Input, Label } from 'native-base';

import NewNoteForm from './NewNoteForm';

export class NewNotePage extends Component {
  static propTypes = {

  }

  static navigationOptions = {
    title: 'New Note'
  };

  onFormSave = (values) => {
    console.log(values);
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

const mapDispatchToProps = {

}



export default connect(mapStateToProps, mapDispatchToProps)(NewNotePage)
