import React from 'react'
import './index.css'
import Card from '../Card'

const Home = () => (
    <div className="home">
        <div className="message">
            <p>You don't have any friend in your register yet.</p>
            <div className="container__btn-add">
                <a>Add</a>
            </div>
        </div>
    </div>
)

export default Home