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
interface IProps extends IMapProps, IDispatchProps {}

const App: React.FC<IProps> = (props: IProps) => {
    useEffect(() => {
        props.getInitialValue()
    }, []);


  return (
    <div className="App">
       <span>{props.value}</span>
      <button onClick={props.increase}>+</button>
    </div>
  );
}

const mstp = (state: IState): IMapProps => ({
    value: state.counter.value
})

export default connect(mstp, { increase: increaseValue, getInitialValue })(App);
