import React from 'react';

type ButtonPropsType = {
    name: string
    ButtonCallBack: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.ButtonCallBack();
    }
    return (
        <button onClick={onClickButtonHandler} disabled={props.disabled}>
            {props.name}
        </button>
    );
};

