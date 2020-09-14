import React, { useEffect, useState } from 'react'
import classes from './Board.module.scss'
import Tile from '../Tile/Tile'

const createBoard = (rowsAmount, colsAmount) => {
    const rows = []

    for (let i = 1; i <= rowsAmount; i++) {
        const row = {tiles: []}

        for (let j = 1; j <= colsAmount; j++) {
            row.tiles.push({id: i * 10 + j})
        }

        rows.push(row)
    }

    return rows
}

const Board = props => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(createBoard(6, 6))
    }, [])

    return (
        <div className={classes.Board}>
            <table className={classes.Grid}>
                <tbody>
                    {rows.map((row, index) => {
                        return (
                            <tr className={classes.Grid__row} key={index}>
                                {row.tiles.map(tile => {
                                    return (
                                        <Tile id={tile.id} key={tile.id} />
                                    )
                                }) }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Board