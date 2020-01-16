import reducer from "./counter-reducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    counter: reducer
});

export type IState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;

// Если нам нужно типизировать, то что возвращает функция, то сделать это через ReturnType
let func = () => {
    return {name: "sds", address: "sdsd"};
};

type IFunc = ReturnType<typeof func>;

