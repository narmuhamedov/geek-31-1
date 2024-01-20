const initialState = {
    numbers: [],
    result: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NUMBER':
            return {
                ...state,
                numbers: [...state.numbers, action.payload],
            };

        case 'CLEAR_LIST':
            return {
                ...state,
                numbers: [],
                result: 0,
            };

        case 'PERFORM_OPERATION':
            let newResult;
            switch (action.payload) {
                case 'add':
                    newResult = state.result + state.numbers.reduce((acc, num) => acc + num, 0);
                    break;

                case 'subtract':
                    newResult = state.result - state.numbers.reduce((acc, num) => acc + num, 0);
                    break;

                case 'multiply':
                    newResult = state.result * state.numbers.reduce((acc, num) => acc + num, 0);
                    break;

                case 'divide':
                    newResult = state.result / state.numbers.reduce((acc, num) => acc + num, 0);
                    break;

                default:
                    newResult = state.result;
            }

            return {
                ...state,
                numbers: [],
                result: newResult,
            };

        default:
            return state;
    }
};

export default rootReducer;
