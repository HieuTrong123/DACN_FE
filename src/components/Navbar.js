import React, { useState, useEffect } from 'react';
import classes from './Navbar.module.css'
import logo_light from '../assets/light-mode.png'
import { Link, NavLink } from 'react-router-dom'
import Button from '../UI/Button'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, addToCart, removeFromCart } from '../Store/Actions';

export default function Navbar() {

    const user = useSelector((state) => state.user.user);
    console.log(user);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({ username: 'exampleUser' }));
    };

    const [isScrolled, setIsScrolled] = useState(false);

    const [nav_mobile, set_nav_mobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function HandleNavMobile() {
        set_nav_mobile(!nav_mobile);
    }

    return (
        <div className={isScrolled ? classes.fixed : ''}>
            <div className={`grid wide ${classes.nav}`}>

                <div className={`${classes.nav_PC}`}>
                    <Link to={'/'}>
                        <img className={classes.logo} src={logo_light} />
                    </Link>
                    <ul className={`${classes.nav_list}`}>
                        <li>
                            <NavLink to={'/'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/news'}>
                                News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/forum'}>
                                Forum
                            </NavLink>
                        </li>
                    </ul>
                    <div className={`l-3 m-3 ${classes.search}`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className={`${classes.user}`}>
                        <Button onClick={handleLogin} className={classes.btn}>
                            Login
                        </Button>
                        <Button className={classes.btn}>
                            register
                        </Button>
                    </div>
                </div>
                <div className={`row ${classes.nav_mobile}`}>
                    <Link className={`col l-2 m-2`} to={'/'}>
                        <img src={logo_light} />
                    </Link>
                    {/* <label htmlFor='menu_nav'>
                        <i className="fa-solid fa-bars"></i>
                    </label> */}
                    <i onClick={HandleNavMobile} className="fa-solid fa-bars"></i>

                    {/* <input type='checkbox' className={classes.mobile_menu} id='menu_nav' /> */}

                    <motion.div className={` ${classes.list_mobile}`}
                        initial={{
                            opacity: 0,
                            x: '100vw'
                        }}
                        animate={nav_mobile ? { opacity: 1, x: 0 } : { opacity: 0, x: '100vw', }}

                        transition={{ duration: .3, }}
                    >
                        <div className={`grid wide ${classes.mobile_head}`}>
                            <div className={`l-3 m-3 c-10 ${classes.search}`}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type='text' placeholder='Search...' />
                            </div>
                            {/* <label className='c-2' htmlFor='menu_nav'>
                                <i className="fa-solid fa-xmark"></i>
                            </label> */}
                            <div className={`c-2 ${classes.icon_close}`}>
                                <i onClick={HandleNavMobile} className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
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
                        <div className='grid wide'>
                            <Button onClick={handleLogin} className={`c-12 ${classes.btn_mb}`}>Login</Button>
                            <Button className={`c-12 ${classes.btn_mb}`}>Register</Button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>

    )
}
