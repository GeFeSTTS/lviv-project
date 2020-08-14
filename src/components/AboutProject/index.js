import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';
import * as firebase from 'firebase';

export default function AboutProject () {
    const [toggle, setToggle] = useState(false);
    const [shortIdeaOfProject, setShortIdea] = useState('');
    const [ideaOfProject, setIdea] = useState('');
    const [firstLetter, setFirstLetter] = useState('');

    useEffect(() => {
        getMainIdea();
    })

    const getMainIdea = async () => {
        const rootRef = await firebase.firestore().collection('topFields').doc('mainIdea').get();
        const data = rootRef.data();
        setFirstLetter(data.description_short.substr(0,1))
        setShortIdea(data.description_short.substr(1));
        setIdea(data.description.substr(1));
    }

    return (
        <div className="about-project-container" id="about-project">
            <div className="about-project-article" >
                <h1>Яка ідея проекту</h1>
                {!toggle ? (
                    <h5>
                        <span className="title-letter">{firstLetter}</span>{ReactHtmlParser(shortIdeaOfProject)} <span className="more-block" style={{display: (!toggle ? 'inline' : 'none')}} onClick={() => setToggle(true)}>. . .</span>
                    </h5>
                ) : (
                    <h5>
                        <span className="title-letter">{firstLetter}</span>{ReactHtmlParser(ideaOfProject)} <span className="less-block" style={{display: (toggle ? 'inline' : 'none')}} onClick={() => setToggle(false)}>Менше</span>
                    </h5>
                )}
            </div>
        </div>
    )
}
