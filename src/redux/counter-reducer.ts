import api from "../api/api";
import {IState} from "./store";
import {Dispatch} from "redux";

const INCREASE = "Counter/INCREASE";
const GET_INITIAL_VALUE_SUCCESS = "Counter/GET_INITIAL_VALUE_SUCCESS";
const INCREASE_VALUE_SUCCESS = "Counter/INCREASE_VALUE_SUCCESS";


// Если нам нужно типизировать объект, то мы можем сделать это через typeof
/*
var settings = {
    name: "asaas",
    age: 12
}

type ISettings = typeof settings;
*/

interface ITask {
    title: string
}

const initialState = {
    value: 2,
    tasks: [] as Array<ITask>
};

type ICounterState = typeof initialState;

const reducer = (state: ICounterState = initialState, action: ICounterAction): ICounterState => {

    switch (action.type) {
        case INCREASE:
            return {...state, value: state.value + 1};
        case GET_INITIAL_VALUE_SUCCESS:
            return {...state, value: action.value};
        case INCREASE_VALUE_SUCCESS:
            return {...state, value: action.value};
        default:
            return state;
    }
};

interface IIncreaseAction {
    type: typeof INCREASE
}

interface IGetInitialValueSuccessAction {
    type: typeof GET_INITIAL_VALUE_SUCCESS
    value: number
}

interface IIncreaseValueSuccessAction {
    type: typeof INCREASE_VALUE_SUCCESS
    value: number
}

type ICounterAction = IIncreaseAction | IGetInitialValueSuccessAction | IIncreaseValueSuccessAction;

type IAppActions = ICounterAction

// ACTIONS
export const increase = (): IIncreaseAction => ({type: INCREASE});
export const getInitialValueSuccess = (value: number): IGetInitialValueSuccessAction => ({
    type: GET_INITIAL_VALUE_SUCCESS,
    value
});
export const increaseValueSuccess = (value: number): IIncreaseValueSuccessAction => ({
    type: INCREASE_VALUE_SUCCESS,
    value
});

// THUNK
export const getInitialValue = () => async (dispatch: Dispatch<IAppActions>) => {
    let response = await api.counter.getValue();
    dispatch(getInitialValueSuccess(response.value));
};
export const increaseValue = () => async (dispatch: Dispatch<IAppActions>, getState: () => IState) => {
    let value = getState().counter.value;
    await api.counter.changeValue(value + 1);
    dispatch(increaseValueSuccess(value + 1));
};

export default reducer;