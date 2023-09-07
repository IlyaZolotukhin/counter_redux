
const initialState = {
    startValue: 0,
    count: 0 as number,
    maxValue: 0,
    message: ''
};

type InitialStateType = typeof initialState

const counterReducer = (state: InitialStateType = initialState, action: CountReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "RESET":
            return {...state, count: state.count = 0}
        case "MESSAGE":
            return {...state, message: state.message = action.newMessage}
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: state.maxValue = action.value}
        case "CHANGE-START-VALUE":
            return {...state, startValue: state.startValue = action.newValue}
        case "SET":
            return {...state, count: state.count = 0}

        default:
            return state;
    }
}

export const incrementAC = () => ({type: 'INCREMENT'} as const)
export const messageAC = (newMessage: string) => ({type: 'MESSAGE',newMessage} as const)
export const resetAC = () => ({type: 'RESET'} as const)
export const changeMaxValueAC = (value: number) => ({type: 'CHANGE-MAX-VALUE', value} as const)
export const changeStartValueAC = (newValue:number) => ({type: 'CHANGE-START-VALUE',newValue} as const)
export const setAC = (startValue: number) => ({type: 'SET', startValue} as const)


export type incrementACType = ReturnType<typeof incrementAC>
export type ResetACType = ReturnType<typeof resetAC>
export type MessageACType = ReturnType<typeof messageAC>
export type ChangeMaxValueACType =  ReturnType<typeof changeMaxValueAC>
export type ChangeStartValueACType =  ReturnType<typeof changeStartValueAC>
export type setACType =  ReturnType<typeof setAC>

export type CountReducerActionsType = incrementACType | ResetACType | MessageACType |
    ChangeMaxValueACType | ChangeStartValueACType | setACType

export default counterReducer;