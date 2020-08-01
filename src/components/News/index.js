import React, { useState } from 'react';
import './index.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import nextButton from '../../assets/button-next.svg';
import backButton from '../../assets/button-back.svg';
import ModalWindow from '../ModalWindow';
import firstNews from '../../assets/first-news.png';

const RenderButton = ({ img, handleClick }) => {
    return (
        <img src={img} onClick={handleClick} alt="Next Button" />
    )
}

const news = [
    {
        date: "1",
        month: "серпня",
        image: firstNews,
        title: "Створення міського фонду культури: як це буде",
        information: "Відбулося публічне представлення проєкту «Можливості та механізми створення міських фондів культури». Представники команди розповіли про ідею, цілі та схему проєкту. Проєкт, що став можливий завдяки підтримці Українського культурного фонду, є учасницькою практикою, тобто передбачає залучення до робочого процесу різних зацікавлених сторін.",
        additionalInformation: "Проєкт має декілька етапів та рівнів напрацювання і тестування ідей, низку залучених різних сторін та фахівців — для забезпечення комплексного підходу. На старті уже відбувся відкритий відбір до 4 тематичних робочих груп (мериторична, інституційна, організаційно-правова, фінансова). Із напрацьованими у групах результатами в серпні працюватиме загальна робоча група проєкту, до складу якої входять керівник проєкту та куратори тематичних груп, фахівці ЛМР з фінансів, права, з управління культури, дієвці культурного середовища, аналітики. На певних етапах проєкту в роботу включаться експерти — аналітики й рецензенти. На вересень заплановане друге коло із залученням робочих груп та експертів. Впродовж усього процесу буде юридичний супровід. Фінал — у жовтні: отримаємо аналітичний звіт, де буде зафіксована модель міського фонду культури. Ці напрацювання ляжуть в основу проєкту рішення Львівської міської ради — і, можливо, Львів отримає нову інституцію — Фонд культури. Крім того, напрацьована модель може бути цікавою і для інших міст. Упродовж проєкту відбудеться декілька проміжних публічних презентацій.",
        shouldModal: true
    },
    {
        date: "28",
        month: "червня",
        information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in luctus dolor. Morbi pharetra lacus sit amet felis finibus ullamcorper. Praesent laoreet, leo ac aliquet suscipit, turpis velit dictum orci, non efficitur odio mauris vel justo. Donec vitae sagittis augue, consequat rhoncus nibh. In ante dolor, tempor eget tempor nec, pellentesque quis libero. Sed ornare fringilla aliquam. Nam vestibulum neque eu ipsum porttitor, in facilisis metus efficitur. Nullam vitae urna vel justo consectetur maximus sit amet eget massa. Suspendisse suscipit pellentesque nisi. Cras ornare porta nibh, in pellentesque arcu pulvinar quis."
    },
    {
        date: "16",
        month: "червня",
        information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in luctus dolor. Morbi pharetra lacus sit amet felis finibus ullamcorper. Praesent laoreet, leo ac aliquet suscipit, turpis velit dictum orci, non efficitur odio mauris vel justo. Donec vitae sagittis augue, consequat rhoncus nibh. In ante dolor, tempor eget tempor nec, pellentesque quis libero. Sed ornare fringilla aliquam. Nam vestibulum neque eu ipsum porttitor, in facilisis metus efficitur. Nullam vitae urna vel justo consectetur maximus sit amet eget massa. Suspendisse suscipit pellentesque nisi. Cras ornare porta nibh, in pellentesque arcu pulvinar quis."
    }
]

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
                    naturalSlideHeight={18}
                    totalSlides={TOTAL_SLIDES}
                    currentSlide={currentSlide}
                    isIntrinsicHeight
                >
                    <Slider>
                        {news.map((el, index) => {
                            return (
                                <Slide index={index}>
                                    <div className="news-block">
                                        {el.image ? (
                                            <img src={firstNews} alt="First news" />) : (                                
                                            <div className="news-date">
                                                <p>{el.date}</p>
                                                <h5>{el.month}</h5>
                                            </div>
                                        )}
                                        <div className="news-info">
                                            <h3>{el.title}</h3>
                                            <p>{el.information}{el.shouldModal && <ModalWindow info={el} />}</p>
                                        </div>
                                    </div>
                                </Slide>
                            )
                        })}
                        {/* <Slide index={0}>
                            <div className="news-block">
                                <img src={firstNews} alt="First news" />
                                <div className="news-info">
                                    <h3>Створення міського фонду культури: як це буде</h3>
                                    <p>Відбулося публічне представлення проєкту «Можливості та механізми створення міських фондів культури». Представники команди розповіли про ідею, цілі та схему проєкту. Проєкт, що став можливий завдяки підтримці Українського культурного фонду, є учасницькою практикою, тобто передбачає залучення до робочого процесу різних зацікавлених сторін.<ModalWindow info={} /></p>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="news-block">
                                <div className="news-date">
                                    <p>28</p>
                                    <h5>червня</h5>
                                </div>
                                <div className="news-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in luctus dolor. Morbi pharetra lacus sit amet felis finibus ullamcorper. Praesent laoreet, leo ac aliquet suscipit, turpis velit dictum orci, non efficitur odio mauris vel justo. Donec vitae sagittis augue, consequat rhoncus nibh. In ante dolor, tempor eget tempor nec, pellentesque quis libero. Sed ornare fringilla aliquam. Nam vestibulum neque eu ipsum porttitor, in facilisis metus efficitur. Nullam vitae urna vel justo consectetur maximus sit amet eget massa. Suspendisse suscipit pellentesque nisi. Cras ornare porta nibh, in pellentesque arcu pulvinar quis.</p>
                                </div>
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
                        </Slide> */}
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