import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button, Icon } from 'native-base';

export class HomePage extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    notes = [
        { title: 'a' },
        { title: 'b' },
        { title: 'c' }
    ]

    render() {
        return (

            <Content>
                <List>
                    <ListItem>
                        <Text>A</Text>
                    </ListItem>
                    <ListItem>
                        <Text>B</Text>
                    </ListItem>
                </List>
            </Content>

        )
    }
}


export default HomePage
