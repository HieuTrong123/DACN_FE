import React from 'react'
import classes from './Footer.module.css'
import logo_dark from '../assets/dark-mode.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className={classes.footer}>
            <div className='grid wide'>
                <div className={classes.footer_contain}>
                    <img src={logo_dark} />
                    <p>
                        The startup community in cyberspace promotes the entrepreneurial spirit among young people, while supporting the search for investors, ideas and members for new projects.
                    </p>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/news'>
                                News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/forum'>
                                Forum
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes.footer_contact}>
                    <p>@ 2020, UI8 LLC.</p>
                    <div>
                        <p>Follow us</p>
                        <ul>
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
