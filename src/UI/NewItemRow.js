import React from 'react'
import classes from './NewItemRow.module.css'

export default function NewItemRow(props) {
    const { img, type, title, note, time, name } = props.item
    return (
        <div className={classes.NewItemRow}>
            <img src={img} />
            <div className={classes.contain}>
                <p className={classes.type}>{type}</p>
                <div className={classes.context}>
                    <h2 className={classes.title}>
                        {title}
                    </h2>
                    <p className={classes.note}>{note}</p>
                </div>
                <div className={classes.box_info}>
                    <div className={classes.info}>
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>{time}</p>
                    </div>
                    <div className={classes.info}>
                        <i className="fa-solid fa-user"></i>
                        <p>
                            {name}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
