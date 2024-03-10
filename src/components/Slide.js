import React, { useState, useEffect } from 'react';
import classes from './Slide.module.css'; // Create a CSS file for styling
import SlideItem from '../UI/SlideItem';
import Slide1 from '../assets/Slide1.avif'
import Slide2 from '../assets/Slide2.jpg'
import Slide3 from '../assets/Slide3.jpg'
import Slide4 from '../assets/Slide4.jpg'

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const news = [
        {
            img: Slide1,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman1',
            time: 'Nov 17, 2023',
            name: 'Evan'
        },
        {
            img: Slide2,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman2',
            time: 'Nov 17, 2023',
            name: 'Evan'
        },
        {
            img: Slide3,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman3',
            time: 'Nov 17, 2023',
            name: 'Evan'
        },
        {
            img: Slide4,
            type: 'Travel',
            title: 'Vacations That Will Make You Superhuman4',
            time: 'Nov 17, 2023',
            name: 'Evan'
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === news.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? news.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {

        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex]);

    return (
        <div className={classes.slide}>
            <button onClick={prevSlide} className={`${classes.slider_button} ${classes.button_left}`}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className='row'>
                <SlideItem className='col l-7 m-7 c-12' item={news[currentIndex]} />
                <SlideItem className={`col l-5 m-5 ${classes.slide2}`} item={news[(currentIndex + 1) % news.length]} />
            </div>
            <button onClick={nextSlide} className={`${classes.slider_button} ${classes.button_right}`}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>

    );
};

export default Slider;

