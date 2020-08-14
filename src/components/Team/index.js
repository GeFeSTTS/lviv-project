import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import ReactHtmlParser from 'react-html-parser';
import nextButton from '../../assets/button-next.svg';
import firstPersonTeam from '../../assets/first-person-team.png';
import secondPersonTeam from '../../assets/second-person-team.png';
import thirdPersonTeam from '../../assets/third-person-team.png';
import fourthPersonTeam from '../../assets/fourth-person-team.png';
import fifthPersonTeam from '../../assets/fifth-person-team.png';
import './index.css';

const RenderButton = ({ img, handleClick }) => {
    return (
        <img src={img} onClick={handleClick} alt="Next Button" />
    )
}

export default function Team () {
    const TEAM = [
        {
            fullName: "Ліда Савченко-Дуда",
            currentPosition: "керівниця напрямку створення міського <br /> Фонду культури Інституту стратегії культури",
            position: "— кураторка мериторичної групи",
            quote: "«У цьому проєкті ставимо перед собою декілька завдань. Маємо проаналізувати функціональні частини міських фондів культури і розробити комплексну модель фонду. Результати стануть основою для появи в нашому місті нової інституції — Фонду культури Львова: сподіваємося, відповідне рішення про створення нової інституції буде підтримане депутатами міської ради, а також зацікавить інші українські міста. За успішне впровадження цієї практики загалом відповідає середовище культури, адже це для людей культури — можливість для розвитку і реалізації»",
            photo: firstPersonTeam
        }, {
            fullName: "Володимир Воробей",
            currentPosition: "директор PPV Knowledge Networks",
            position: "— керівник проєкту",
            quote: "«Творення інституцій нового типу вимагає якісного аналізу альтернатив, підходів та сценаріїв. Фонд культури Львова, що його передбачено Стратегією розвитку культури Львова 2025, має шанс стати знаковою інституцією, як Український культурний фонд. Прикметно, що саме УКФ дає нам можливість напрацювати концепцію Фонду культури Львова у відповідний спосіб. Раді, що PPV Knowledge Networks залучені до цього інноваційного для України проєкту»",
            photo: secondPersonTeam
        }, {
            fullName: "Юлія Хомчин",
            currentPosition: "директорка Інституту стратегії культури",
            position: "— кураторка інституційної групи",
            quote: "«Процес є учасницьким і об’єднує різні сторони. Це і фахівці, представники та представниці середовища культури Львова, де ідея фонду давно має підтримку. Це і муніципальна складова — ІСК, одним із завдань якого є створення Фонду культури Львова. Незалежна консалтингова й аналітична агенція PPV Knowledge Networks забезпечує аналітику й експертизу. Плюс є підтримка на рівні держави (від УКФ) й міста. Проєкт дозволить залученим учасникам отримати важливий досвід і новий інструмент для сфери,»",
            photo: thirdPersonTeam
        }, {
            fullName: "Михайло Мороз",
            currentPosition: "екс-очільник управління культури ЛМР, викладач кафедри культурології УКУ",
            position: "— куратор фінансової групи",
            quote: "«Створення Фонду культури для розширення можливостей міської грантової підтримки культурних ініціатив у Львові — одне з пріоритетних завдань, визначених у Стратегії розвитку культури до 2025 року. Приємно, що це завдання не залишилось декларативним, і разом, за підтримки УКФ, вперше в Україні переходимо до напрацювання конкретних механізмів створення та функціонування Фонду. Це непростий виклик, і у кожної з тематичних робочих груп попереду багато роботи. Але переконаний, що ми будемо успішні, і наші результати будуть корисні не лише для Львова, а й для інших зацікавлених міст»",
            photo: fourthPersonTeam
        }, {
            fullName: "Анна Лиско",
            currentPosition: "керуюча партнерка LI Partners",
            position: "- кураторка організаційно-правової групи",
            quote: "«Створення та існування фонду культури матиме сенс і високу ефективність лише у випадку, якщо ми напрацюємо механізми, які забезпечать його незалежність, прозорість та відкритість. Проста процедура подання, зменшення кількості бюрократичних процедур та легка комунікація із заявником має стати одними із основних засад роботи фонду»",
            photo: fifthPersonTeam
        }
    ]
    const TOTAL_SLIDES = 5;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [shouldNextButtonDisabled, setNextDisabled] = useState(false);
    const [shouldPrevButtonDisabled, setPrevDisabled] = useState(false);
    const handleNextClick = () => {
        setPrevDisabled(false);
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

    const isFirefox = () => {
        return navigator.userAgent.indexOf("Firefox") > -1;
    }

    const handlePrevClick = () => {
        setNextDisabled(false);
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
        <div className="team-container" id="team">
            <h1>Хто в команді</h1>
            <p>
                Проєкт втілює агенція економічного розвитку PPV Knowledge Networks й муніципальна установа «Інститут стратегії культури» (ІСК) за підтримки Українського культурного фонду та Львівської міської ради.
            </p>

            <div className="team-carousel">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={35}
                    totalSlides={TOTAL_SLIDES}
                    currentSlide={currentSlide}
                    dragEnabled={false}
                    isIntrinsicHeight
                >
                    <Slider>
                    {TEAM.map((el, id) => {
                        return (
                            <Slide key={id} index={0}>
                                <div className="team-block">
                                    <img className={isFirefox() ? 'firefox-browser' : null}src={el.photo} alt="Lida Savchenko-Duda" />
                                    <div className="team-quote">
                                        <h4>{el.quote}</h4>
                                        <h5>{el.position}</h5>
                                        <div className="team-personal-info">
                                            <h2>{el.fullName}</h2>
                                            <h6>{ReactHtmlParser(el.currentPosition)}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        )
                    })}

                    </Slider>
                    <div className="carousel-configuration">
                        <ButtonBack disabled={shouldPrevButtonDisabled}><RenderButton img={nextButton} handleClick={handlePrevClick} /></ButtonBack>
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