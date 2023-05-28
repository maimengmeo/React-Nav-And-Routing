import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const reducer = (state, action) => {
    if (action.type === "increment")
        return { ...state, count: state.count + 1 };

    if (action.type === "change-value-to-add")
        return { ...state, valueToAdd: action.payload };

    return state;
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
        dispatch({ type: "increment" });
    };
    const decrement = () => {
        // setCount(count - 1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);

        dispatch({ type: "change-value-to-add", payload: value });
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