import React from 'react'
import classes from './Hand.module.scss'
import Card from '../Card/Card'

const Hand = props => {

    return (
        <div className={classes.Hand}>
            <div>
                <Card cardId={1} />
            </div>
            <div>
                <Card cardId={2} />
            </div>
            <div>
                <Card cardId={3} />
            </div>
        </div>
    )
}

export default Hand