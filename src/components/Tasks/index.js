import React from 'react';
import './index.css';
import task from '../../assets/task-logo.svg';

export default function Tasks () {
    return (
        <div className="tasks-container" id="tasks">
            <h1>Чого ми прагнемо</h1>
            <div className="tasks-blocks">
                <div>
                    <h1 className="first-number">1.</h1>
                    <img src={task} alt="First task logotype" />
                    <p>Визначити загальну архітектуру міських фондів культури із залученням культурних середовищ та зацікавлених сторін.</p>
                </div>
                <div>
                    <h1 className="second-number">2.</h1>
                    <img src={task} alt="First task logotype" />
                    <p>Проаналізувати функціональні частини міських фондів культури та розробити комплексну модель муніципального фонду.</p>
                </div>
                <div>
                    <h1 className="third-number">3.</h1>
                    <img src={task} alt="First task logotype" />
                    <p>Отримати на виході рішення про створення нової інституції — Фонду культури Львова. Успішне впровадження практики є відповідальністю середовища культури в цілому.</p>
                </div>
            </div>
        </div>
    )
}