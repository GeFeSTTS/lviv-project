import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.css';
import * as firebase from 'firebase';

function AdminPanel({ history }) {
  const [ideaFirstParagraph, setFirstParagraph] = useState('');
  const [ideaFull, setIdeaFull] = useState('');
  const [reportParagraph, setReportParagraph] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsInfo, setNewsInfo] = useState('');
  const [newsFullInfo, setNewsFullInfo] = useState('');
  const [newsPhoto, setNewsPhoto] = useState(null);
  const [preHistoryParagraph, setPreHistoryParagraph] = useState('');
  const [date, setDate] = useState('');
  
  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
  
    if(name === 'idea-first-paragraph') {
      setFirstParagraph(value);
    } else if(name === 'idea-additional-paragraph'){
      setIdeaFull(value);
    } else if(name === 'report-paragraph'){
      setReportParagraph(value);
    } else if(name === 'news-title'){
      setNewsTitle(value);
    } else if(name === 'news-info'){
      setNewsInfo(value);
    } else if(name === 'news-additional-info'){
      setNewsFullInfo(value);
    } else if(name === 'news-photo'){
      setNewsPhoto(event.target.files[0]);
    } else if(name === 'prehistory-paragraph'){
      setPreHistoryParagraph(value);
    }
  }

  const changeDateHandler = (date) => {
    setDate(date);
  }

  const changeIdea = (event, ideaFirstParagraph, ideaFull) => {
    event.preventDefault();
    firebase.firestore().collection('topFields').doc('mainIdea').set({
      description: ideaFull,
      description_short: ideaFirstParagraph,
      title: 'Яка ідея проекту'
    })
    .then(function() {
      alert("Успішно відредаговано");
    })
    .catch(function(error) {
      console.error("Щось пішло не так! ", error);
    });
  };

  const changeReportParagraph = (event, reportParagraph) => {
    event.preventDefault();
    firebase.firestore().collection('topFields').doc('howWeWork').set({
      analyticalReport: reportParagraph,
      title: 'Як ми працюємо'
    })
    .then(function() {
      alert("Успішно відредаговано");
    })
    .catch(function(error) {
      console.error("Щось пішло не так! ", error);
    });
  };

  const addNews = (event, newsTitle, newsInfo, newsFullInfo, newsPhoto) => {
    event.preventDefault();
    
    if(newsPhoto) {
      const uploadPhoto = firebase.storage().ref(newsPhoto.name).put(newsPhoto);
      uploadPhoto.on(
        "state_changed",
        snapshot => {},
        error => {
          alert(error);
      })
    }

    firebase.firestore().collection('news').add({
      description: newsFullInfo,
      description_short: newsInfo,
      title: newsTitle,
      date: date,
      image: `gs://culturefund-d3208.appspot.com/${newsPhoto.name}`
    })

    .then(function() {
      alert("Успішно додано");
    })
    .catch(function(error) {
      console.error("Щось пішло не так! ", error);
    });
  };

  const changePreHistory = (event, preHistoryParagraph) => {
    event.preventDefault();
    firebase.firestore().collection('topFields').doc('howItStarted').set({
      description: preHistoryParagraph,
      title: 'Як це починалось'
    })
    .then(function() {
      alert("Успішно відредаговано");
    })
    .catch(function(error) {
      console.error("Щось пішло не так! ", error);
    });
  }

  const signOutUser = () => {
    firebase.auth().signOut().then(function() {
      history.push("/signin");
    })
  }

  return (
    <div className="admin-panel-container">
      <div className="signout-block">
        <button className="signout-button" onClick={signOutUser}>Sign Out</button>
      </div>
      <ul>
        <li>
          Підказка:
          Для того, щоб перенести речення на нову строку вставте тег &lt;br /&gt; вкінці. Наприклад: "Сьогодні тепла погода. &lt;br /&gt; Завтра йду на озеро"
        </li>
        <li>
          Підказка:
          Для того, щоб зробити абзац вставте два теги &lt;br /&gt; підряд. Наприклад: "Він пішов гуляти з псом. &lt;br /&gt; &lt;br /&gt; Пішов дощ"
        </li>
        <li>
          Підказка:
          Для того, щоб прикріпити посилання до певної фрази обгорніть фразу тегом &lt;a href="https://google.com"&gt; ... &lt;/a&gt; з обох сторін. Наприклад: "Це посилання буде вести на &lt;a href="https://google.com"&gt; google &lt;/a&gt;"
        </li>
      </ul>
      <form className="change-idea-form">
        <h1>Яка ідея проекту</h1>
        <div>
          <div>
            <label htmlFor="idea-first-paragraph" className="block">
              Перший абзац тексту (до слова "Більше", яке відкриває весь текст):
            </label>
          </div>
          <textarea 
            rows="8" 
            cols="50" 
            name="idea-first-paragraph"
            value = {ideaFirstParagraph}
            id="idea-first-paragraph"
            onChange = {(event) => onChangeHandler(event)}
          >
          </textarea>
        </div>
        <div>
          <div>
            <label htmlFor="idea-additional-paragraph" className="block">
              Весь текст (повністю):
            </label>
          </div>
          <textarea 
            rows="8" 
            cols="50" 
            name="idea-additional-paragraph"
            value = {ideaFull}
            id="idea-additional-paragraph"
            onChange = {(event) => onChangeHandler(event)}
          >
          </textarea>
        </div>
        <h5>Зберігти змінити?</h5>
        <button className="form-button" onClick = {(event) => changeIdea(event, ideaFirstParagraph, ideaFull)}>
          Зберегти
        </button>
      </form>
      <form className="report-form">
        <h1>"Аналітичний звіт..."</h1>
        <div>
          <div>
            <label htmlFor="report-paragraph" className="block">
              Новий текст:
            </label>
          </div>
          <textarea 
            rows="8" 
            cols="50" 
            name="report-paragraph"
            value = {reportParagraph}
            id="report-paragraph"
            onChange = {(event) => onChangeHandler(event)}
          >
          </textarea>
        </div>
        <h5>Зберігти змінити?</h5>
        <button className="form-button" onClick = {(event) => changeReportParagraph(event, reportParagraph)}>
          Зберегти
        </button>
      </form>
      <form className="news-form">
        <h1>Інформування та адвокація | Додати новину</h1>
        <div>
          <div>
            <label  className="block">
              Дата:
            </label>
          </div>
          <DatePicker
            selected={date}
            onChange={changeDateHandler}
          />
        </div>
        <div>
          <div>
            <label htmlFor="news-title" className="block">
              Назва новини:
            </label>
          </div>
          <textarea 
            rows="2" 
            cols="20" 
            name="news-title"
            value = {newsTitle}
            id="news-title"
            onChange = {(event) => onChangeHandler(event)}
          >
          </textarea>
        </div>
        <div>
          <div>
            <label htmlFor="news-info" className="block">
              Перший абзац новини (для відображення на головній сторінці)
            </label>
          </div>
          <textarea 
            rows="4" 
            cols="50" 
            name="news-info"
            value = {newsInfo}
            id="news-info"
            onChange = {(event) => onChangeHandler(event)}
          >
          </textarea>
        </div>
        <div>
          <div>
            <label htmlFor="news-info" className="block">
              Додатковий текст, який буде доступний при відкритті модального вікна (коли новина відкриваєтсья повністю)
            </label>
          </div>
          <textarea 
            rows="10" 
            cols="50" 
            name="news-additional-info"
            value = {newsFullInfo}
            id="news-additional-info"
            onChange = {(event) => onChangeHandler(event)}
          >
          </textarea>
        </div>
        <div>
          <div>
            <label htmlFor="news-photo" className="block">
              Фото новини (завантажувати не обов'язково)
            </label>
          </div>
          <input 
            type="file" 
            onChange = {(event) => onChangeHandler(event)} 
            id="news-photo"
            name="news-photo"
          />
        </div>
        <h5>Додати новину?</h5>
        <button className="form-button" onClick = {(event) => addNews(event, newsTitle, newsInfo, newsFullInfo, newsPhoto)}>
          Додати новину
        </button>
      </form>
      <form className="prehistory-form">
        <h1>Як це починалось</h1>
        <div>
          <div>
            <label htmlFor="prehistory-paragraph" className="block">
              Новий текст:
            </label>
          </div>
          <textarea 
            rows="8" 
            cols="50" 
            name="prehistory-paragraph"
            value = {preHistoryParagraph}
            id="prehistory-paragraph"
            onChange = {(event) => onChangeHandler(event)}
          >
          </textarea>
        </div>
        <h5>Зберігти змінити?</h5>
        <button className="form-button" onClick = {(event) => changePreHistory(event, preHistoryParagraph)}>
          Зберегти
        </button>
      </form>      
    </div>
  );
}

export default AdminPanel;