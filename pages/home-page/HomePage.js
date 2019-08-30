import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Title, Content } from 'native-base';

export class HomePage extends Component {
    static propTypes = {
       
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Note</Title>
                </Header>
            
                <Content>
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
