import React, { useContext } from 'react'
import './styles/home.css'

import Welcome from '../components/Welcome'
import PageContacts from './PageContacts'

import { UserContext } from '../context/context.js'

const Home = () => {
    const { user } = useContext(UserContext)
    if(!user) {
        return <Welcome />
    }
    return (
        <PageContacts />
    )
}

export default Home;