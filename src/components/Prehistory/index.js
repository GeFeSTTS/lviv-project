import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';
import * as firebase from 'firebase';

export default function Prehistory () {
    const [preHistory, setPrehistory] = useState('');
    const [firstLetter, setFirstLetter] = useState('');

    useEffect( () => {
        getPreHistory();
    })

    const getPreHistory = async () => {
        const rootRef = await firebase.firestore().collection('topFields').doc('howItStarted').get();
        const data = rootRef.data();
        setFirstLetter(data.description.substr(0,1))
        setPrehistory(data.description.substr(1));
    }

    return (
        <div className="prehistory-container" id="prehistory">
            <h1>Як це починалось</h1>
            <p >
                <span className="title-letter">{firstLetter}</span> {ReactHtmlParser(preHistory)}
            </p>
        </div>
    )
}