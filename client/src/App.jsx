import React, { useState, useEffect, useContext } from 'react'
import {
        BrowserRouter as Router,
        Switch,
        Route
    } from "react-router-dom"
import './App.css'
import { UserContext } from './context/context.js'
import { getToken } from './lib/tokenControl'
import Loading from './components/Loading'
import Header from './components/Header/'
import PageRegister from './pages/PageRegister'
import PageSignIn from './pages/PageSignIn'
import PageAdd from './pages/PageAdd'
import Home from './pages/Home'

const App = () => {
    const [loading, setLoading] = useState(true)
    const { setUser } = useContext(UserContext)

    useEffect(() => {
        const token = getToken();
        if(!token) {
            setLoading(false)
            return
        }
        if(token) {
            fetch('http://localhost:4000/prueba')
                .then(res => res.json())
                .then(data => console.log(data))
            setLoading(false)
            setUser(true)
            return
        }
    }, [])

    if(loading) {
        return <Loading />
    }
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contacts/add" component={PageAdd} />
                <Route path="/SignIn" component={PageSignIn} />
                <Route path="/Register" component={PageRegister} />
            </Switch>
        </Router>
    )
}

export default App;