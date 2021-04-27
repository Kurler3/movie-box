import axios from 'axios'
import React, { Component } from 'react'

const AuthenticationContext = React.createContext()

export class AuthenticationProvider extends Component {

    state = {
        isLoggedIn: false,
        logIn: () => {this.setState((state) => ({isLoggedIn:true}))},
        logOff: () => {this.setState((state) => ({isLoggedIn:false}))}
    }

    updateLoggedIn(isLogged) {
        this.setState({isLoggedIn: isLogged})
    }

    render() {
        return (
            <AuthenticationContext.Provider value={this.state}>
                {this.props.children} 
            </AuthenticationContext.Provider>
        )
    }
}

export const AuthenticationConsumer = AuthenticationContext.Consumer
