import React from 'react'
import classes from './Details.module.css'
import Navbar from '../components/Navbar'
import mail_img from '../assets/mail.png'
import zalo_img from '../assets/zalo.png'
import fb_img from '../assets/fb.png'
import item_img from '../assets/NewItem.png'
import NewItemRow from '../UI/NewItemRow'
import Footer from '../components/Footer'

export default function Details() {
    const ListNews = [
        {
            img: item_img,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
        {
            img: item_img,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
        {
            img: item_img,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
        {
            img: item_img,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
        {
            img: item_img,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...',
            time: 'Nov 17, 2023',
            name: 'Evan',
            note: 'The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against'
        },
    ]
    return (
        <>
            <Navbar />
            <div className={`grid wide ${classes.details}`}>
                <h2 className={classes.type}>
                    World
                </h2>
                <h1 className={classes.title}>
                    More Teens Who Use Marijuana Are Suffering From Psychosis
                </h1>
                <div className={classes.note}>
                    State-run KOMIR is seeking a dispute resolution over the closed copper mine Canada's First Quantum filed an ICC claim
                </div>
                <div className={`row ${classes.info}`}>
                    <div className={`col c-12 m-6 l-6 ${classes.post_info}`}>
                        <div>
                            <p className={classes.info_title}>
                                By:
                            </p>
                            <p className={classes.name}>
                                Evan
                            </p>
                        </div>
                        <div className={classes.date}>
                            <i className="fa-solid fa-calendar-days"></i>
                            <p>
                                Mar 07, 2023
                            </p>
                        </div>
                    </div>
                    <div className={`col c-12 m-6 l-6 ${classes.contact}`}>
                        <p className={classes.info_title}>
                            Contact:
                        </p>
                        <div className={classes.contact_img}>
                            <img src={mail_img} />
                            <img src={zalo_img} />
                            <img src={fb_img} />
                        </div>
                    </div>
                </div>
                <img className={classes.new_img} src={item_img} />
                <div className={classes.contain}>
                    A state-run company in South Korea is set to seek an investor-state dispute settlement (ISDS) worth around 1 trillion won ($747.1 million) against the government of Panama over expected losses from the shutdown of a copper mine in the Central American country.Korea Mine Rehabilitation and Mineral

                    Resources Corp. (KOMIR) acquired a 10% stake in Minera Panamá S.A., a Canadian miner First Quantum Minerals unit, in 2009. Minera Panama operates Cobre Panama, one of the world’s largest copper mines opened in the last decade, with 3 billion tons of proven reserves.KOMIR started commercial production of the mineral in 2019 and has posted profits there – 49.5 billion won and 145.2 billion won in 2021 and 2022, respectively.But Panama’s Supreme Court decided on the closure of the mine last December, declaring the mining business contract that would provide Minera Panama with at least 20 years of mining unconstitutional. The Supreme Court’s ruling

                    cited environmental and human rights concerns in the local community. Before the top court’s decision, Minera Panama experienced blockades of the mine’s power plant and parts of the Pan American highway by environmental activists for weeks. KOMIR’s dispute settlement is expected to be around 1 trillion won, given that Korea’s LS MnM Inc., formerly LS Nikko Copper, sold a 10% stake in Minera Panama for $665 million to First Quantum in 2017.The state-run Korean miner is slated to tap Kim & Chang, a top-tier law firm in the

                    country, to deal with the dispute settlement. First Quantum, which owns 90% of Minera Panama, filed an International Chamber of Commerce (ICC) claim against Panama last November.Write to Yong-Hoon Kwon and Jin-Seong Kim at fact@hankyung.comJihyun Kim edited this article.
                </div>
                <h1 className={classes.more_read}>
                    More to Read
                </h1>
                <div className={classes.list_news}>
                    {ListNews.map((item, i) => {
                        return (<div key={i}>
                            <NewItemRow item={item} />
                        </div>)
                    })}
                </div>

            </div>
            <Footer />
        </>
    )
}
