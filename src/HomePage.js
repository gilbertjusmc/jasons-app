import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class HomePage extends Component {
    render() {
        return (
            <UserConsumer>
                {props => {
                    return <div>{props.name}</div>
                }}
            </UserConsumer>
        )
    }
}

export default HomePage