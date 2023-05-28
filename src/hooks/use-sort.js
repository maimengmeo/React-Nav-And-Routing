/** CREATE A HOOK
 * 1. make a function called 'useSomething'
 * 2. find all non jsx expressions that refer to 1-2 related pieces of state
 * 3. put them in 'useSomething'
 * 4. find not defined errors in component
 * 5. inside hook, return an obj that contains the var the component need
 * 6. in the component, call the hoook, destructure by the needed var
 * 7. find not defined errors in to hook, pass the missing var in as args to the hook
 * 8.
 * 9.
 */

import { useState } from "react";

function useSort(data, config) {
    //sortable table:
    //2 pcs of state:
    //  +track of the sort order: null 'asc' 'desc'
    //  +track which col is sorting: null, 'name', 'score'
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    //handle click will change the state. null-asc-desc-null
    //everytime click, app will be rerendered, resort, passed to table
    const setSortCol = (label) => {
        //check if the clicked label is same as the current label,
        //if not reset the sortedData, get new sortedData by the new label
        if (sortBy && label !== sortBy) {
            setSortBy(label);
            setSortOrder("asc");
            return;
        }

        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else if (sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(label);
        }
    };

    //only sort if sortOrder && sortBy !== null
    //make a copy of the 'data' prop. never modify an array directly if that array is a part of the prop sys or state sys
    //find the correct sortValue function & use it for sorting
    let sortedData = [...data];
    if (sortBy && sortOrder) {
        const { sortValue } = config.find((c) => c.label === sortBy);
        sortedData = sortedData.sort((a, b) => {
            //comparetor function that work with sort func
            const reverseOrder = sortOrder === "asc" ? 1 : -1; //if asc, keep the order, otherwise, return value will be * -1, order is revered to desc

            const valueA = sortValue(a);
            const valueB = sortValue(b);

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else return (valueA - valueB) * reverseOrder;
        });
    }

    return { sortOrder, sortBy, sortedData, setSortCol }; //step 5
}
export default useSort;
