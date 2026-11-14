import { SET_ERROR_MESSAGE, SET_SCREEN, SET_IS_LOADING } from "../utilities/Constants";


export default function reducer(state, action) {
    state = {
        ...state,
        errorMessage: ""
    };
    switch (action.type) {
        case SET_SCREEN: {
            return {
                ...state,
                screen: action.payload
            };
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.payload,
            };
        }
        default: return state;
    };
}