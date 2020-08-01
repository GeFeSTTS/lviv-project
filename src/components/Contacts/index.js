import React from 'react';
import './index.css';

export default function Contacts () {
    return (
        <div className="contacts-container" id="contacts">
            <h1>Як дізнатися більше</h1>
            <div className="contacts-columns">
                <div className="first-column">
                    <div className="knowledge-networks">
                        <p className="title-paragraph">PPV Knowledge Networks</p>
                        <p><a className="without-underline" href="https://www.ppv.net.ua">www.ppv.net.ua</a></p>
                        <p><a className="without-underline" href="https://fb.com/ppvknowledgenetworks">fb.com/ppvknowledgenetworks</a></p>
                    </div>
                    <div>
                        <p className="title-paragraph">Володимир Воробей</p>
                        <h5>Керівник проєкту, директор PPV Knowledge Networks</h5>
                        <p><a className="without-underline" href="mailto:someuservv@ppv.net.ua">vv@ppv.net.ua</a></p>
                    </div>
                </div>
                <div className="second-column">
                    <div className="knowledge-networks">
                        <p className="title-paragraph">Інститут стратегії культури</p>
                        <p><a className="without-underline" href="https://www.isc.lviv.ua">www.isc.lviv.ua</a></p>
                        <p><a className="without-underline" href="https://fb.com/csilviv">fb.com/csilviv</a></p>
                    </div>
                    <div>
                        <p className="title-paragraph">Ліда Савченко-Дуда  </p>
                        <h5>Керівниця напрямку створення міського Фонду культури Інституту стратегії культури</h5>
                        <p><a className="without-underline" href="mailto:someuservv@gmail.com">li.savchenkoduda.csi@gmail.com</a></p>
                    </div>
                </div>   
            </div>        
        </div>
    )
}