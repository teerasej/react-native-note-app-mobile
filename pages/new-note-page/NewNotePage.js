import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button, Item, Input, Label } from 'native-base';
import { Field,reduxForm } from 'redux-form';

export class NewNotePage extends Component {
    static propTypes = {
       
    }

    renderInput({ input, label, type, meta: { touched, error, warning } }){
        var hasError= false;
        if(error !== undefined){
          hasError= true;
        }
        return( 
          <Item error= {hasError}>
            <Input {...input}/>
            {hasError ? <Text>{error}</Text> : <Text />}
          </Item>
        )
      }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>New Note</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Item inlineLabel >
                        <Label>Message: </Label>
                    <Field name="message" component={this.renderInput} />
                    </Item>
                    <Button block primary >
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

NewNotePage = reduxForm({ form: 'test' })(NewNotePage)

export default connect(mapStateToProps, mapDispatchToProps)(NewNotePage)
