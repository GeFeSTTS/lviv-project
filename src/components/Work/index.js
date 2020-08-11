import React, { useEffect, useState } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import reportFile from '../../assets/report-file.svg';
import './index.css';
import * as firebase from 'firebase';


export default function Work () {
    const [percents, setPercents] = useState(null);
    const [analyticalReport, setAnaliticalReport] = useState('');
    const [firstLetter, setFirstLetter] = useState('');

    useEffect( () => {
        getAnalitycalReport();
    })

    const getAnalitycalReport = async () => {
        const rootRef = await firebase.firestore().collection('topFields').doc('howWeWork').get();
        const data = rootRef.data();
        setFirstLetter(data.analyticalReport.substr(0,1))
        setAnaliticalReport(data.analyticalReport.substr(1));
    }

    useEffect( () => {
        const date = new Date();
        if(date.getMonth() === 6) {
            setPercents(20);
        } else if (date.getMonth() === 7) {
            setPercents(40);
        } else if (date.getMonth() === 8) {
            setPercents(60);;
        } else {
            setPercents(80);
        }
        setTimeout(() => {
            const elements = [...document.querySelectorAll(".indexedStep.accomplished")];
            const lastElement = elements[elements.length - 1];
            lastElement.style['background-color'] = '#F05A2B';
        }, 500)

    }, [])

    return (
        <div className="work-container" id="work">
            <h1>Як ми працюємо</h1>
            <p>Проєкт реалізовується із червня по жовтень 2020 року. Учасники робочих груп, аналітики, зовнішні експерти та рецензенти проаналізують різні функціональні частини фонду і запропонують його комплексну модель.</p>
            
            <div className="work-progress-bar">
                <div className="work-main-option">
                    <ul>
                        <li>юридичний супровід</li>
                    </ul>
                </div>
                <div className="work-border-block">
                    <div className="left-border"></div>
                    <div className="middle-border"></div>
                    <div className="right-border"></div>
                </div>
                <ProgressBar percent={percents}>
                    <Step>
                        {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                        </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                        </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                        </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                        </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                        </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                        </div>
                        )}
                    </Step>
                </ProgressBar>
            </div>
            <div className='work-month'>
                <div className='month'>
                    <p>Червень</p>
                    <ul>
                        <li>старт проєкту</li>
                        <li>відбір до тематичних робочих груп</li>
                    </ul>
                </div>
                <div className='month'>
                    <p>Липень</p>
                    <ul>
                        <li>ввідний аналітичний огляд</li>
                        <li>публічна презентація проєкту</li>
                        <li>засідання тематичних робочих груп</li>
                    </ul>
                </div>
                <div className='month'>
                    <p>Серпень</p>
                    <ul>
                        <li>засідання загальної робочої групи</li>
                        <li>аналітичні огляди</li>
                        <li>експертні рецензії</li>
                    </ul>
                </div>
                <div className='month'>
                    <p>Вересень</p>
                    <ul>
                        <li>засідання загальної робочої групи</li>
                        <li>публічне обговорення напрацювань</li>
                        <li>проєкт рішення про створення Фонду культури Львова</li>
                    </ul>
                </div>
                <div className='month'>
                    <p>Жовтень</p>
                    <ul>
                        <li>аналітичний звіт</li>
                    </ul>
                </div>
            </div>
            
            <div className="work-row">
                <div className="work-block">
                    <p className="work-first-number-block">1</p>
                    <p>Мериторична частина</p>
                    <h5>Які формати та напрямки конкурсних програм варто мати на місцевому рівні, як вони доповнюють державні та міжнародні програми розвитку культури</h5>
                    <h5 className="curator">Кураторка: Ліда Савченко-Дуда</h5>
                </div>
                <div className="work-block">
                    <p className="work-second-number-block">2</p>
                    <p>Інституційна частина</p>
                    <h5>Якою має бути структура врядування фонду, як забезпечується незалежність, підзвітність, прозорість діяльності</h5>
                    <h5 className="curator">Кураторка: Юля Хомчин</h5>
                </div>
            </div>
            <div className="work-row">
                <div className="work-block">
                    <p className="work-third-number-block">3</p>
                    <p>Організаційно-правова частина</p>
                    <h5>Якими мають бути юридична форма, структура та персонал</h5>
                    <h5 className="curator">Кураторка: Анна Лиско</h5>
                </div>
                <div className="work-block">
                    <p className="work-fourth-number-block">4</p>
                    <p>Фінансова частина</p>
                    <h5>Якими є джерела забезпечення, яке управління фінансами та бюджет</h5>
                    <h5 className="curator">Куратор: Михайло Мороз</h5>
                </div>
            </div>
            <div className="work-row">
                <div className="work-block">
                    <p className="work-fifth-number-block">5</p>
                    <p>Загальна робоча група</p>
                    <h5>Якою буде модель міського фонду культури на основі напрацювань чотирьох тематичних груп</h5>
                </div>
                <div className="work-block">
                    <p className="work-sixth-number-block">6</p>
                    <p>Аналітики</p>
                    <h5>Як напрацьована модель фонду співвідноситься зі Стратегією розвитку культури Львова, ввідним аналітичним оглядом та запитами середовища культури</h5>
                </div>
            </div>
            <div className="work-row">
                <div className="work-block">
                    <p className="work-seventh-number-block">7</p>
                    <p>Рецензенти</p>
                    <h5>Як напрацьована модель фонду співвідноситься з національними та міжнародними культурними політиками</h5>
                </div>
                <div className="work-block">
                    <p className="work-eighth-number-block">8</p>
                    <p>Юристи</p>
                    <h5>Чи напрацьована модель фонду відповідає чинному законодавству, чи потрібне запровадження нових правових механізмів або правого регулювання для функціонування міських фондів культури</h5>
                </div>
            </div>

            <div className="work-report">
                <div className="report-title">
                    <p><span className="title-letter">{firstLetter}</span>{analyticalReport}</p>
                </div>
                <div className="report-file">
                    <h5>Кінцевий результат проєкту</h5>
                    <img src={reportFile} alt='Report file' />
                    <input type="button" value="Завантажит звіт" disabled />
                    <h6>(у жовтні)</h6>
                </div>
            </div>
        </div>
    )
}