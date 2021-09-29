import React, { Component } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button, Icon } from 'native-base';


export default function HomePage() {

    const notes = useSelector(state => state.notes)

    return (
        <Content>
            <List>
                <ListItem>
                    <Text>A</Text>
                </ListItem>
                <ListItem>
                    <Text>B</Text>
                </ListItem>
                {
                    notes.map((item, index) => {
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



