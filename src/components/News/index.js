import React, { useState } from 'react';
import './index.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import nextButton from '../../assets/button-next.svg';
import backButton from '../../assets/button-back.svg';
import ModalWindow from '../ModalWindow';

const RenderButton = ({ img, handleClick }) => {
    return (
        <img src={img} onClick={handleClick} alt="Next Button" />
    )
}

export default function News () {
    const TOTAL_SLIDES = 3;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [shouldNextButtonDisabled, setNextDisabled] = useState(false);
    const [shouldPrevButtonDisabled, setPrevDisabled] = useState(false);
    const handleNextClick = () => {
        setCurrentSlide((previousValue) => {
            if(previousValue === TOTAL_SLIDES - 1) {
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
                    naturalSlideHeight={20}
                    totalSlides={TOTAL_SLIDES}
                    currentSlide={currentSlide}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="news-block">
                                <div className="news-date">
                                    <p>1</p>
                                    <h5>липня</h5>
                                </div>
                                <p className="news-info">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in luctus dolor. Morbi pharetra lacus sit amet felis finibus ullamcorper. Praesent laoreet, leo ac aliquet suscipit, turpis velit dictum orci, non efficitur odio mauris vel justo. Donec vitae sagittis augue, consequat rhoncus nibh. In ante dolor, tempor eget tempor nec, pellentesque quis libero. Sed ornare fringilla aliquam. Nam vestibulum neque eu ipsum porttitor, in facilisis metus efficitur. Nullam vitae urna vel justo consectetur maximus sit amet eget massa. Suspendisse suscipit pellentesque nisi. Cras ornare porta nibh, in pellentesque arcu pulvinar quis.<ModalWindow /> 
                                </p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="news-block">
                                <div className="news-date">
                                    <p>28</p>
                                    <h5>червня</h5>
                                </div>
                                <p className="news-info">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in luctus dolor. Morbi pharetra lacus sit amet felis finibus ullamcorper. Praesent laoreet, leo ac aliquet suscipit, turpis velit dictum orci, non efficitur odio mauris vel justo. Donec vitae sagittis augue, consequat rhoncus nibh. In ante dolor, tempor eget tempor nec, pellentesque quis libero. Sed ornare fringilla aliquam. Nam vestibulum neque eu ipsum porttitor, in facilisis metus efficitur. Nullam vitae urna vel justo consectetur maximus sit amet eget massa. Suspendisse suscipit pellentesque nisi. Cras ornare porta nibh, in pellentesque arcu pulvinar quis.
                                </p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="news-block">
                                <div className="news-date">
                                    <p>18</p>
                                    <h5>червня</h5>
                                </div>
                                <p className="news-info">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in luctus dolor. Morbi pharetra lacus sit amet felis finibus ullamcorper. Praesent laoreet, leo ac aliquet suscipit, turpis velit dictum orci, non efficitur odio mauris vel justo. Donec vitae sagittis augue, consequat rhoncus nibh. In ante dolor, tempor eget tempor nec, pellentesque quis libero. Sed ornare fringilla aliquam. Nam vestibulum neque eu ipsum porttitor, in facilisis metus efficitur. Nullam vitae urna vel justo consectetur maximus sit amet eget massa. Suspendisse suscipit pellentesque nisi. Cras ornare porta nibh, in pellentesque arcu pulvinar quis.
                                </p>
                            </div>
                        </Slide>
                    </Slider>
                    <div className="carousel-configuration">
                        <ButtonBack disabled={shouldPrevButtonDisabled}><RenderButton img={backButton} handleClick={handlePrevClick} /></ButtonBack>
                        <div className="carousel-slides-info">
                            <span className='current-slide'>{`${currentSlide + 1}/`}</span>
                            <span className='total-slides'>{TOTAL_SLIDES}</span>
                        </div>
                        <ButtonNext disabled={shouldNextButtonDisabled}><RenderButton img={nextButton} handleClick={handleNextClick} /></ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}