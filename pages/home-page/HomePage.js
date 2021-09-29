import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button, Icon } from 'native-base';


export default function HomePage() {

    let notes = [
        { title: 'a' },
        { title: 'b' },
        { title: 'c' }
    ]

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



