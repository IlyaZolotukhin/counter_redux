import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}

export default App;
