import "./timer.scss"
import { useState, useEffect } from 'react';

type TimeNumber = {
    setShowMint(value:boolean):void
};
export default function Timer({setShowMint}:TimeNumber) {

    const deadline:any = new Date(2021, 11, 29, 17, 59, 59);

    const currentDate:any = new Date(
        new Date().getUTCFullYear(), 
        new Date().getUTCMonth(),
        new Date().getUTCDate(), 
        new Date().getUTCHours(),
        new Date().getUTCMinutes(),
        new Date().getUTCSeconds()
    );

    const diff = deadline-currentDate
    const dayNum = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hourNum = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minNum = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const secNum = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    // console.log(dayNum, hourNum, minNum, secNum)
    
    const [ days, setDays ] =  useState(dayNum);
    const [ hours, setHours ] =  useState(hourNum);
    const [ minutes, setMinutes ] = useState(minNum);
    const [ seconds, setSeconds ] =  useState(secNum);

    useEffect(()=>{
        if(dayNum < 0 || hourNum < 0 || minNum < 0 || secNum < 0){
            setShowMint(true)
        }

        let myInterval = setInterval(() => {

            if (diff <= 0) {
                clearInterval(myInterval)
                setShowMint(true)
            }

            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours ===0){
                        if(days === 0){
                            clearInterval(myInterval)
                            setShowMint(true)
                        }
                        else{
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        }
                    }
                    else{
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    });

    return (
        <div className="timer">
        { days === 0 && hours === 0 && minutes === 0 && seconds === 0
            ? null
            : <div className="timerNums">
                <div className="days">
                    <div className="number">{days < 10 ?  `0${days}` : days}</div>
                    <div className="txt">Days</div>
                </div>
                <div className="hours">
                    <div className="number">{hours < 10 ?  `0${hours}` : hours}</div>
                    <div className="txt">Hours</div>
                </div>
                <div className="mins">
                    <div className="number">{minutes < 10 ?  `0${minutes}` : minutes}</div>
                    <div className="txt">Minuts</div>
                </div>
                <div className="seconds">
                    <div className="number">{seconds < 10 ?  `0${seconds}` : seconds}</div>
                    <div className="txt">Seconds</div>
                </div>
            </div>
        }
        </div>
    )
}