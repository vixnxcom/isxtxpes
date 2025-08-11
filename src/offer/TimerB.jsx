import React from 'react'
import TimerBlue from './TimerBlue';
import styles from '../style';

function TimerB() {
    return (
        <section className={`${styles.flexCenter}`}>
        <div className="flex items-center justify-center rounded-[24px]  bg-time mx-auto">
            <TimerBlue />
        </div>
        </section>
    );
}


export default TimerB