import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button } from 'native-base';


export class NewNotePage extends Component {
    static propTypes = {
       
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

export default connect(mapStateToProps, mapDispatchToProps)(NewNotePage)
