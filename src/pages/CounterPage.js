import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

//action type is ALL CAPS
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";

//when user do 1 action, dispatch is called->reducer is called
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return { ...state, count: state.count + 1 };
        case SET_VALUE_TO_ADD:
            return { ...state, valueToAdd: action.payload };
        default:
            return state;
        //can throw error here instead of return state
    }

    // if (action.type === INCREMENT_COUNT)
    //     return { ...state, count: state.count + 1 };

    // if (action.type === SET_VALUE_TO_ADD)
    //     return { ...state, valueToAdd: action.payload };

    // return state; //always return somethings in reducer
};

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });
    //store state with single obj,
    //dispatch is function to update state. only pass 1 arg to dispatch

    const increment = () => {
        // setCount(count + 1);
        dispatch({ type: INCREMENT_COUNT }); //action obj
    };
    const decrement = () => {
        // setCount(count - 1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);

        dispatch({ type: SET_VALUE_TO_ADD, payload: value }); //action obj
    };

    const hanldeSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is: {state.count}</h1>

            <div className="flex flex-row">
                <Button primary className="mr-3" onClick={increment}>
                    Increment
                </Button>
                <Button primary onClick={decrement}>
                    Decrement
                </Button>
            </div>

            <form>
                <label>Add a Value</label>
                <input
                    type="number"
                    value={state.valueToAdd || ""} //if value is 0, display empty string
                    onChange={handleChange}
                    className="p-1 m-3 bg-gray-50 border border-gray-100"
                ></input>
                <Button primary onClick={hanldeSubmit}>
                    Add
                </Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
