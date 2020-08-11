import React, { useState, useEffect } from 'react';
import './index.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import nextButton from '../../assets/button-next.svg';
import backButton from '../../assets/button-back.svg';
import ModalWindow from '../ModalWindow';
import ReactHtmlParser from 'react-html-parser';
import * as firebase from 'firebase';

const RenderButton = ({ img, handleClick }) => {
    return (
        <img src={img} onClick={handleClick} alt="Next Button" />
    )
}

export default function News () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [shouldNextButtonDisabled, setNextDisabled] = useState(false);
    const [shouldPrevButtonDisabled, setPrevDisabled] = useState(false);
    const [news, setNews] = useState([]);

    useEffect( () => {
        getAndParseNews();
    }, [])

    const getAndParseNews = async () => {
        const rootRef = await firebase.firestore().collection('news').get();
        const data = rootRef.docs.map(doc => doc.data());
        data.forEach(el => {
            const normalDate = new Date(el.date.seconds * 1000);
            const numberOfMonth = normalDate.getMonth();
            const day = normalDate.getDay();
            const imageName = el.image.match(/.com\/(\w.+)/)[1];
            let month;
            if (numberOfMonth == 7) {
                month = 'серпня';
            } else if (numberOfMonth == 8) {
                month = 'вересня'
            } else if (numberOfMonth == 9) {
                month = 'жовтня'
            } else if (numberOfMonth == 10) {
                month = 'листопада'
            } else if (numberOfMonth == 11) {
                month = 'грудня'
            }
            el.month = month;
            el.day = day;
            el.validImage = `https://firebasestorage.googleapis.com/v0/b/culturefund-d3208.appspot.com/o/${imageName}?alt=media`
        })
        setNews(data)
        console.log('News', data)
    }

    const handleNextClick = () => {
        setCurrentSlide((previousValue) => {
            if(previousValue === news.length - 1) {
                setNextDisabled(true);
                return previousValue;
            } else {
                setNextDisabled(false);
                return previousValue + 1;
            }
        })
    }

    const handlePrevClick = () => {
        setCurrentSlide((previousValue) => {
            if(previousValue === 0) {
                setPrevDisabled(true);
                return 0;
            } else {
                setPrevDisabled(false);
                return previousValue - 1;
            }
        })
    }

    return (
        <div className="news-container" id="news">
            <h1>Інформування та адвокація</h1>
            <div className="news-carousel">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={18}
                    totalSlides={news.length}
                    currentSlide={currentSlide}
                    isIntrinsicHeight
                >
                    <Slider>
                        {news.map((el, index) => {
                            return (
                                <Slide index={index}>
                                    <div className="news-block">
                                        {el.validImage ? (
                                            <img src={el.validImage} alt="First news" />) : (                                
                                            <div className="news-date">
                                                <p>{el.day}</p>
                                                <h5>{el.month}</h5>
                                            </div>
                                        )}
                                        <div className="news-info">
                                            <h3>{el.title}</h3>
                                            <p>{ReactHtmlParser(el.description_short)}{<ModalWindow info={el} />}</p>
                                        </div>
                                    </div>
                                </Slide>
                            )
                        })}
                    </Slider>
                    <div className="carousel-configuration">
                        <ButtonBack disabled={shouldPrevButtonDisabled}><RenderButton img={backButton} handleClick={handlePrevClick} /></ButtonBack>
                        <div className="carousel-slides-info">
                            <span className='current-slide'>{`${currentSlide + 1}/`}</span>
                            <span className='total-slides'>{news.length}</span>
                        </div>
                        <ButtonNext disabled={shouldNextButtonDisabled}><RenderButton img={nextButton} handleClick={handleNextClick} /></ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}