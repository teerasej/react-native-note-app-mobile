import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, } from 'native-base';

export class HomePage extends Component {
    static propTypes = {
        notes: PropTypes.array
    }

    static defaultProps = {
        notes: [
            { title: 'a' },
            { title: 'b' },
            { title: 'c' }
        ]
    }


    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Note</Title>
                    </Body>
                </Header>

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
            </Container>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
