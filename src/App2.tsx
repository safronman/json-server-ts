import React, {useEffect} from 'react';
import './App.css';
import {getInitialValue, increaseValue} from "./redux/counter-reducer";
import {connect} from "react-redux";
import {IState} from "./redux/store";

interface IMapProps {
    value: number
}

interface IDispatchProps {
    getInitialValue: () => void
    increase: () => void
}

//type IProps = IMapProps & IDispatchProps;
interface IProps extends IMapProps, IDispatchProps {
}

function App2(props: IProps) {
    useEffect(() => {
        props.getInitialValue()

        /*case INCREASE_VALUE_SUCCESS:
                return {...state, value: action.value};*/
    }, []);


    return (
        <div className="App"><span>{props.value}</span>
            <button onClick={props.increase}>+</button>
            <span>{props.value}</span>
        </div>
    );
}

const mstp = (state: IState): IMapProps => ({
    value: state.counter.value
})

export default connect(mstp, {increase: increaseValue, getInitialValue})(App2);
