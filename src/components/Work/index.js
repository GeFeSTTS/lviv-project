import React, { useEffect, useState } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import reportFile from '../../assets/report-file.svg';
import './index.css';

export default function Work () {
    const [percents, setPercents] = useState(null);

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
            <h5>Експерти й тематичні робочі групи проаналізують різні функціональні частини фонду — і запропонують його комплексну модель.</h5>
            <div className="work-row">
                <div className="work-block">
                    <p className="work-first-number-block">1</p>
                    <p>Мериторична частина</p>
                    <h6>Які формати та напрямки конкурсних програм варто мати на місцевому рівні, як вони доповнюють державні та міжнародні програми розвитку культури</h6>
                    <h5>Кураторка: Ліда Савченко-Дуда</h5>
                </div>
                <div className="work-block">
                    <p className="work-second-number-block">2</p>
                    <p>Інституційна частина</p>
                    <h6>Якою має бути структура врядування фонду, як забезпечується незалежність, підзвітність, прозорість діяльності</h6>
                    <h5>Кураторка: Юля Хомчин</h5>
                </div>
            </div>
            <div className="work-row">
                <div className="work-block">
                    <p className="work-third-number-block">3</p>
                    <p>Організаційно-правова частина</p>
                    <h6>Якими мають бути юридична форма, структура та персонал</h6>
                    <h5>Кураторка: Анна Лиско</h5>
                </div>
                <div className="work-block">
                    <p className="work-fourth-number-block">4</p>
                    <p>Фінансова частина</p>
                    <h6>Якими є джерела забезпечення, яке управління фінансами та бюджет</h6>
                    <h5>Куратор: Михайло Мороз</h5>
                </div>
            </div>
            <div className="work-row">
                <div className="work-block">
                    <p className="work-fifth-number-block">5</p>
                    <p>Загальна робоча група</p>
                    <h6>Якою буде модель міського фонду культури на основі напрацювань чотирьох тематичних груп</h6>
                </div>
                <div className="work-block">
                    <p className="work-sixth-number-block">6</p>
                    <p>Аналітики</p>
                    <h6>Як напрацьована модель фонду співвідноситься зі Стратегією розвитку культури Львова, ввідним аналітичним оглядом та запитами середовища культури</h6>
                </div>
            </div>
            <div className="work-row">
                <div className="work-block">
                    <p className="work-seventh-number-block">7</p>
                    <p>Рецензенти</p>
                    <h6>Як напрацьована модель фонду співвідноситься з національними та міжнародними культурними політиками</h6>
                </div>
                <div className="work-block">
                    <p className="work-eighth-number-block">8</p>
                    <p>Юристи</p>
                    <h6>Чи напрацьована модель фонду відповідає чинному законодавству, чи потрібне запровадження нових правових механізмів або правого регулювання для функціонування міських фондів культури</h6>
                </div>
            </div>

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

            <div className="work-report">
                <div className="report-title">
                    <p><span className="title-letter">А</span>налітичний звіт, що висвітлює можливості та механізми створення міських фондів культури, модель напрацювання місцевої політики у співпраці зі зацікавленими сторонами, функціональні частини моделі фонду й алгоритм його створення на прикладі Львова. Результати проекту ляжуть в основу рішень Львівської міської ради та прикладом для інших українських міст.</p>
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