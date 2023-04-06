import {useReducer} from "react";

function counterReducer(state: CountState, action: CountAction) {
    switch (action.type) {
        case CountActionKind.Reset:
            return { count: 0 }
        case CountActionKind.Increment:
            return {count: state.count + action.payload}
        case CountActionKind.Decrement:
            return {count: state.count - action.payload}
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    console.log("Render")
    return (
        <>
            <div>App</div>
            <div>Count: {state.count}</div>
            <button onClick={() => dispatch({type: CountActionKind.Increment, payload: 1})}>+</button>
            <button onClick={()=> dispatch({type:CountActionKind.Decrement,payload:1})}>-</button>
            <button onClick={()=> dispatch({type:CountActionKind.Reset,payload:0})}>Clear</button>
        </>
    )
}

enum CountActionKind {
    Increment = 'INCREMENT',
    Decrement = 'DECREMENT',
    Reset = 'RESET',
}

interface CountAction {
    type: CountActionKind
    payload: number
}

interface CountState {
    count: number
}

const initialState: CountState = {count: 0};
export default App
