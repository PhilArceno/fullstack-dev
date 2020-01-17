import React, { Component } from 'react'
import LoginPage from './LoginPage.jsx'
import MainPage from './MainPage.jsx'
import './main.css'

let loggedIn = !true

class App extends Component {
    render = () => {
        if(loggedIn){
            return <MainPage/>
        }
        return <LoginPage/>
    }
}


export default App
