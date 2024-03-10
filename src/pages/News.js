import React, { useState } from 'react'
import classes from './News.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ComboBox from '../UI/ComboBox'
import Button from '../UI/Button'
import NewItemImg from '../assets/NewItem.png'
import NewItemRow from '../UI/NewItemRow'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function News() {

    const [sidebar_mb, set_sidebar_mb] = useState(false);

    function HandleSidebarMb() {
        set_sidebar_mb(!sidebar_mb)
    }

    const options = [
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const ListNews = [
        {
            img: NewItemImg,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
        {
            img: NewItemImg,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
        {
            img: NewItemImg,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
        {
            img: NewItemImg,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
        {
            img: NewItemImg,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
    ]

    return (
        <div>
            <Navbar />
            <div className={classes.head}>
            </div>
            <div className={`grid wide c-12 ${classes.search_bar}`}>
                <div className={classes.search_bar_item}>
                    <label>Location</label>
                    <input placeholder='Enter your location' />
                </div>
                <ComboBox className={classes.search_bar_item} options={options} title='Recruitment type' />
                <ComboBox className={classes.search_bar_item} options={options} title='Price range' />
                <Button className={classes.search_btn}>Search</Button>
            </div>
            <div className={`grid wide ${classes.container}`}>
                <div className='row'>
                    <div className='col l-2 m-2 c-12'>
                        <div className={classes.category_PC}>
                            <div className={classes.slide__menu}>
                                <ul className={classes.slide__list}>
                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>All</NavLink>
                                        <ul className={classes.sub__menu}>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Paid news</NavLink></li>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Most news</NavLink></li>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Latest news</NavLink></li>
                                        </ul>
                                    </li>

                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>World</NavLink>
                                        <ul className={classes.sub__menu}>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Paid news</NavLink></li>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Most news</NavLink></li>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Latest news</NavLink></li>
                                        </ul>
                                    </li>

                                    <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Travel</NavLink>
                                        <ul className={classes.sub__menu}>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Paid news</NavLink></li>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Most news</NavLink></li>
                                            <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Latest news</NavLink></li>
                                        </ul>
                                    </li>


                                </ul>
                            </div>
                        </div>

                        <div className={classes.category_MB}>
                            <div onClick={HandleSidebarMb} className={`${classes.category_icon} ${classes.category_head}`}>
                                <i className="fa-solid fa-chevron-left"></i>
                                <i className="fa-solid fa-list"></i>
                            </div>

                            <motion.div className={` ${classes.list_mobile}`}
                                initial={{
                                    opacity: 0,
                                    x: '100vw'
                                }}
                                animate={sidebar_mb ? { opacity: 1, x: 0 } : { opacity: 0, x: '100vw', }}

                                transition={{ duration: .3, }}
                            >
                                <div className={`grid wide ${classes.mobile_head}`}>
                                    <div onClick={HandleSidebarMb} className={`${classes.category_icon}`}>
                                        {/* <i className="fa-solid fa-layer-group"></i> */}
                                        <i className="fa-solid fa-list"></i>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                                <div className={classes.slide__menu}>
                                    <ul className={classes.slide__list}>
                                        <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>All</NavLink>
                                            <ul className={classes.sub__menu}>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Paid news</NavLink></li>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Most news</NavLink></li>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Latest news</NavLink></li>
                                            </ul>
                                        </li>

                                        <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>World</NavLink>
                                            <ul className={classes.sub__menu}>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Paid news</NavLink></li>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Most news</NavLink></li>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Latest news</NavLink></li>
                                            </ul>
                                        </li>

                                        <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Travel</NavLink>
                                            <ul className={classes.sub__menu}>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Paid news</NavLink></li>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Most news</NavLink></li>
                                                <li><NavLink className={({ isActive }) => (isActive ? classes.active : "")} to={''}>Latest news</NavLink></li>
                                            </ul>
                                        </li>


                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className={`col l-10 m-10 c-12 ${classes.list_news}`}>
                        {ListNews.map((item, i) => {
                            return (<div key={i}>
                                <NewItemRow item={item} />
                            </div>)
                        })}
                        <div className={classes.pagination}>
                            <div className={`${classes.btn_pagination} ${classes.btn_default}`}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                            <div className={`${classes.btn_pagination} ${classes.btn_active}`}>
                                1
                            </div>
                            ...
                            <div className={`${classes.btn_pagination}`}>
                                5
                            </div>
                            <div className={`${classes.btn_pagination} ${classes.btn_next}`}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
