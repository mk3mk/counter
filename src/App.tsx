import s from './Components/Counter.module.css'
import './Components/null.css';
import React from 'react';
import {Title} from './Components/Title';
import {CounterRedux} from './Redux/CounterRedux';
import {Counter} from './Components/Counter';
import Header from './Components/header';




function App() {
    return (
        <div className={s.app}>
            <div className={s.app__container}>
                <Header></Header>
                <Title title={'This is my little React/Redux project.'} className={s.app__title}/>
                <CounterRedux/>
                <Title title={'This is my little project.'} className={s.app__title}/>
                <Counter/>
            </div>
        </div>
    );
}

export default App;
