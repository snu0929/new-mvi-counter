import React, { useEffect, useState } from "react";
import { counterState, autoMode } from "../model/CounterModel";
import {
    increaseCount,
    decreaseCount,
    resetCount,
    toggleAutoMode,
} from "../intent/CounterIntent";
import CounterView from "../view/CounterView";

const Counter = () => {
    const [count, setCount] = useState(counterState.getValue());
    const [isAutoIncrement, setIsAutoIncrement] = useState(autoMode.getValue());

    useEffect(() => {
        const sub1 = counterState.subscribe(setCount);
        const sub2 = autoMode.subscribe(setIsAutoIncrement);
        return () => {
            sub1.unsubscribe();
            sub2.unsubscribe();
        };
    }, []);

    return (
        <CounterView
            count={count}
            isAutoIncrement={isAutoIncrement}
            onIncrement={increaseCount}
            onDecrement={decreaseCount}
            onReset={resetCount}
            onToggle={toggleAutoMode}
        />
    );
};

export default Counter;
