import React, {Component} from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Navigation from './Navigation.jsx'
import MainPage from './MainPage.jsx'
import Login from './Login.jsx'
import Register from './register.jsx'

class App extends Component{

    renderHomePage = () => {
        return <div>
            <Navigation/>
            {/* <MobileNavigation/> */}
            <MainPage/>
            </div>
    }
    renderLoginPage = () => {
        return <Login/>
    }
    renderSignupPage = () => {
        return <Register/>
    }

    render = () => {    
        return (<BrowserRouter>
        <div>
            <Route exact={true} path='/' render={this.renderHomePage}></Route>
            <Route exact={true} path='/login' render={this.renderLoginPage}></Route>
            <Route exact={true} path='/register' render={this.renderSignupPage}></Route>
            <Route exact={true} path='/cart/' render={this.renderCart}></Route>
            <Route exact={true} path='/checkout/' render={this.renderCheckout}></Route>
        </div>
        </BrowserRouter>)
    }
}


export default App
