import React from 'react'
import './App.css'
import Header from './components/Header/'
import Container from './components/Container'
import Card from './components/Card'
import SignIn from './components/SignIn'
import Register from './components/Register'


const App = () => (
    <>
        <Header />
        <Container>
            <Register />
        </Container>
    </>
)

export default App;