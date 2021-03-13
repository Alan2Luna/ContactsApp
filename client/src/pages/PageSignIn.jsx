import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import Loading from '../components/Loading'
import './styles/PageSignIn.css'

const PageSignIn = () => {
    const [loading, setLoading] = useState(false)

    if(loading) {
        return <Loading />
    }
    
    return (
        <div className="container__signin">
            <SignIn />
        </div>
    )
}

export default PageSignIn