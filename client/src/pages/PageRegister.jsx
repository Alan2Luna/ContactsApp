import React, { useState } from 'react'
import Register from '../components/Register'
import Loading from '../components/Loading'
import './styles/PageRegister.css'

const PageResgister = () => {
    const [loading, setLoading] = useState(false)

    if(loading) {
        return <Loading />
    }

    return (
    <div className="container__register">
        <Register />
    </div>
    )
}

export default PageResgister