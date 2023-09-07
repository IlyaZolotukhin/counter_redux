import React, {ChangeEvent} from 'react';
import s from './Counter.module.css'

type InputPropsType = {
    onChangeCallBack: (event: ChangeEvent<HTMLInputElement>) => void
    isError: boolean
    name: string
    value: number|string
}

export const Input = (props: InputPropsType) => {
    return (
        <div>
            <span>{props.name}: </span>
            <input
                className={props.isError ? s.error : ""}
                type="number"
                value={props.value}
                onChange={props.onChangeCallBack}
            />
        </div>
    );
}
