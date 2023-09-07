import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from './Button';
import s from './Counter.module.css'
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";

import {RootStateType} from "../redux/store";
import {changeMaxValueAC, changeStartValueAC, incrementAC, messageAC, resetAC, setAC} from "../redux/CounterReducer";

function Counter() {

    const dispatch = useDispatch();
    const count = useSelector<RootStateType, number>((state) => state.counter.count);
    const startValue = useSelector<RootStateType, number>((state) => state.counter.startValue);
    const maxValue = useSelector<RootStateType, number>((state) => state.counter.maxValue);
    const message = useSelector<RootStateType, string>((state) => state.counter.message);


    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState(true);
    const isCountButtonDisabled = count >= maxValue;
    const isResetButtonDisabled = startValue < 0 || maxValue <= startValue || !isSetButtonDisabled;

    const increment = () => {
        if (count < maxValue) {
            dispatch(incrementAC());
        }
    }

    const reset = () => {
        dispatch(resetAC());
    }

    const setStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        setIsSetButtonDisabled(false)
        dispatch(messageAC('enter values and press "set"'));
        const newValue = parseInt(event.currentTarget.value);
        if (newValue < 0 || newValue >= maxValue) {
            dispatch(messageAC('incorrect value!'));
            dispatch(changeStartValueAC(newValue));
            setIsSetButtonDisabled(true)
        } else {
            dispatch(changeStartValueAC(newValue));
        }
    }

    const setMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setIsSetButtonDisabled(false)
        dispatch(messageAC('enter values and press "set"'));
        const newValue = parseInt(event.currentTarget.value);
        if (newValue <= startValue) {
            dispatch(messageAC('incorrect value!'));
            dispatch(changeMaxValueAC(newValue));
        } else {
            dispatch(changeMaxValueAC(newValue));
        }

    }

    const set = () => {
        setIsSetButtonDisabled(true)
        if (maxValue !== null && startValue !== null) {
            dispatch(setAC(startValue));
        }
    }

    /*    const [startValue, setStartValue] = useState<number>(() => {
            const storedStartValue = localStorage.getItem('startValue');
            return storedStartValue ? JSON.parse(storedStartValue) : 0;
        });
        const [count, setCount] = useState<number | string>(startValue);
        const [maxValue, setMaxValue] = useState<number>(() => {
            const storedMaxValue = localStorage.getItem('maxValue');
            return storedMaxValue ? JSON.parse(storedMaxValue) : 0;
        });
        const [isSetButtonDisabled, setIsSetButtonDisabled] = useState(true);
        const isCountButtonDisabled = count >= maxValue;
        const isResetButtonDisabled = startValue < 0 || maxValue <= startValue || !isSetButtonDisabled;

        useEffect(() => {
            localStorage.setItem('maxValue', JSON.stringify(maxValue));
            localStorage.setItem('startValue', JSON.stringify(startValue));
        }, [maxValue, startValue]);

        const onClickCountButton = () => {
            if (count < maxValue) {
                setCount(+count + 1);
            }
        };
        const onClickResetButton = () => {
            setCount(startValue);
        };
        const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
            setIsSetButtonDisabled(false)
            setCount('enter values and press "set"')
            const newValue = parseInt(event.currentTarget.value);
            if (newValue <= startValue) {
                setCount('incorrect value!')
                setMaxValue(newValue);
            } else {
                setMaxValue(newValue);
            }
        };
        const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
            setIsSetButtonDisabled(false)
            setCount('enter values and press "set"')
            const newValue = parseInt(event.currentTarget.value);
            if (newValue < 0 || newValue >= maxValue) {
                setCount('incorrect value!')
                setStartValue(newValue);
                setIsSetButtonDisabled(true)
            } else {
                setStartValue(newValue);
            }
        };
        const onClickSetButton = () => {
            setIsSetButtonDisabled(true)
            if (maxValue !== null && startValue !== null) {
                setCount(startValue);
            }
        };*/
    return (
        <div className="App">
             <div className={s.settings}>
                <div className={s.inputBlock}>
                    <div>
                        <Input value={maxValue} isError={maxValue <= startValue}
                               name={"Max value"} onChangeCallBack={setMaxValue}/>
                    </div>
                    <div>
                        <Input value={startValue} isError={startValue < 0 || startValue >= maxValue}
                               name={"Start value"} onChangeCallBack={setStartValue}/>
                    </div>
                </div>

                <Button name="Set"
                        disabled={isSetButtonDisabled || maxValue <= startValue}
                        ButtonCallBack={set}/>
            </div>
            <div className={s.result}>

                {/*доделать вывод сообщения*/}

                <div style={{color: count === maxValue || message === "incorrect value!" ? 'red' : 'black'}}
                     className={s.count}>{count}</div>

                <div className={s.btn}>
                    <Button name="Count" disabled={isResetButtonDisabled || isCountButtonDisabled}
                            ButtonCallBack={increment}/>
                    <Button name="Reset" disabled={isResetButtonDisabled}
                            ButtonCallBack={reset}/>
                </div>
            </div>
        </div>
    );
}

export default Counter;

