import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, } from 'native-base';

export class HomePage extends Component {
    static propTypes = {
        notes: PropTypes.array
    }

    static navigationOptions = {
        title: 'Home'
    };

    static defaultProps = {
        notes: [
            { title: 'a' },
            { title: 'b' },
            { title: 'c' }
        ]
    }


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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
