import React from 'react'
import classes from './SlideItem.module.css'

export default function SlideItem(props) {
    const { img, type, title, time, name } = props.item
    return (
        <div style={{ background: `url(${img}) center/cover no-repeat` }} className={`${classes.slide_item} ${props.className}`}>
            <div className={classes.type}>
                <p>
                    {type}
                </p>
            </div>
            <div>
                <h2 className={classes.title}>{title}</h2>
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
