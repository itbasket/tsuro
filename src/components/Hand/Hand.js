import React from 'react'
import classes from './Hand.module.scss'
import Card from '../Card/Card'

const Hand = props => {

    return (
        <div className={classes.Hand}>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}

export default Hand