import React from 'react'
import './styles/PageContacts.css'
import Card from '../components/Card/'

const dataSet = [{
    'id': 1,
    'fullname': 'Alan Luna',
    'email': 'alan@gmail.com',
    'phone': '0424626164616'}, 
    {
    'id': 2,
    'fullname': 'Alan Luna',
    'email': 'alan@gmail.com',
    'phone': '0424626164616'},
    {
    'id': 3,
    'fullname': 'Alan Luna',
    'email': 'alan@gmail.com',
    'phone': '0424626164616'
    }, {
    'id': 4,
    'fullname': 'Alan Luna',
    'email': 'alan@gmail.com',
    'phone': '0424626164616'
    }
]

const PageContacts = () => {
    return (
        <div>
            {
                dataSet.map((data) => 
                   <Card key={data.id} {...data} />
                )
            }
        </div>
    )
}

export default PageContacts