export const addNumber = (number) => ({
    type: 'ADD_NUMBER',
    payload: number,
});

export const clearList = () => ({
    type: 'CLEAR_LIST',
});

export const performOperation = (operation) => ({
    type: 'PERFORM_OPERATION',
    payload: operation,
});
