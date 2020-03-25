import React, { Component } from 'react';
import Page from "./components/Page box/Page/Page";
import Signin from "./components/Log folder/Signin/Signin";
import Register from "./components/Log folder/Register/Register";
import Navigation from "./components/Log folder/Navigation/Navigation";
import './App.scss';


class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'signin',
            isSignedIn: false,
            user: {
                id: '',
                name: '',
                email: '',
                joined: ''
            }
        }
    }

    loadUser = (data) => {
        this.setState({user: {
                id: data.id,
                name: data.name,
                email: data.email,
                joined: data.joined
            }})
    };

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({isSignedIn: false})
        } else if (route === 'home') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    };

    render() {
        const { isSignedIn, route } = this.state;
        return (
            <div className="App">
                <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
                {route === 'home' ?
                    <Page/> :
                    (
                        route === "signin" ?
                            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:
                            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    )
                }
            </div>
        )
    }
}

export default App;
