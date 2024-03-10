import React from 'react'
import Navbar from '../components/Navbar'
import img_head from '../assets/img_head.png'
import classes from './Home.module.css'
import Slide from '../components/Slide'
import Button from '../UI/Button'
import NewItemRow from '../UI/NewItemRow'
import NewItemColumn from '../UI/NewItemColumn'
import Footer from '../components/Footer'
import NewItemImg from '../assets/NewItem.png'
export default function Home() {
    const itemColumn = {
        img: NewItemImg,
        type: 'Travel',
        title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
        time: 'Nov 17, 2023',
        name: 'Evan',
        note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
    }
    const itemsMostRead = [
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
            <div className={`grid wide ${classes.home}`}>
                <div className={`row ${classes.home_intro}`}>
                    <div className={`col l-5 m-5 c-12 ${classes.header}`}>
                        <h2 className={classes.head_title}>
                            Space for the startup community
                        </h2>
                        <p className={classes.head_context}>
                            Building space for the startup community. The goal is to connect people not only in the real world through groups and clubs but also in cyberspace
                        </p>
                    </div>
                    <img className='col l-7 m-7 c-12' src={img_head} />
                </div>

            </div>
            <Slide />
            <div className={`grid wide ${classes.container}`}>
                <div className={classes.head}>
                    <h1 className='l-2 m-3 c-6'>Most read</h1>
                    <Button className='l-2 l-o-1 m-3 c-0'>
                        View all
                    </Button>
                </div>
                <div className='row'>
                    <div className={`col l-5 m-5 c-12 ${classes.boxColumn}`}>
                        <NewItemColumn item={itemColumn} />
                    </div>
                    <div className={`col l-7 m-7 c-12 ${classes.boxRow}`}>
                        {itemsMostRead.map((item, i) => {
                            return (<div key={i}>
                                <NewItemRow item={item} />
                            </div>)
                        })}

                    </div>
                </div>
                <Button className={`l-0 m-0 c-12 ${classes.btn}`}>
                    View all
                </Button>
                <div className={classes.head}>
                    <h1 className='l-2 m-3 c-6'>Latest news</h1>
                    <Button className='l-2 l-o-1 m-3 c-0'>
                        View all
                    </Button>
                </div>
                <div className='row'>
                    <div className={`col l-9 m-9 ${classes.boxRow}`}>
                        {itemsMostRead.map((item, i) => {
                            return (<div key={i}>
                                <NewItemRow item={item} />
                            </div>)
                        })}
                    </div>
                    <div className='col l-3 m-3' style={{ background: '#5468E7' }}>

                    </div>
                </div>
                <Button className={`l-0 m-0 c-12 ${classes.btn}`}>
                    View all
                </Button>
            </div>
            <Footer />
        </div>
    )
}
