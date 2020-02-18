import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button, Icon } from 'native-base';


export class HomePage extends Component {

    render() {
        return (

            <Content>
                <List>
                    {
                        this.props.notes.map((item, index) => {
                            return (
                                <ListItem key={index}>
                                    <Text>{item.title}</Text>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Content>

        )
    }
}

// snippet: reduxmap
const mapStateToProps = (state) => ({
    notes: state.note.notes
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);