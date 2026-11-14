import React, { useReducer } from "react";
import SignInScreen from "../screens/SignInScreen";
import AccountDetailsScreen from "../screens/AccountDetailsScreen";
import { ACCOUNT_DETAILS_SCREEN, SIGN_IN_SCREEN, SET_ERROR_MESSAGE, SET_SCREEN, SET_IS_LOADING } from "../utilities/Constants";

export const AppContext = React.createContext();

function reducer(state, action) {
    state = {
        ...state,
        errorMessage: ""
    };
    switch (action.type) {
        case SET_SCREEN: {
            let screen = {
                [SIGN_IN_SCREEN]: <SignInScreen />,
                [ACCOUNT_DETAILS_SCREEN]: <AccountDetailsScreen />
            }[action.payload] || <SignInScreen />
            return {
                ...state,
                screen: screen
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

export const AppProvider = ( {children} ) => {
    const [appState, dispatch] = useReducer(reducer, {
        screen: <AccountDetailsScreen />,
        email: "",
        password: ""
    });

    const setLoading = (value) => {
        dispatch({
            type: SET_IS_LOADING,
            payload: value,
        });
    }

    const contextObject = {
        appState: appState,
        dispatch: dispatch,
        setLoading: setLoading
    };

    return (
        <AppContext.Provider value={contextObject}>
            {children}
        </AppContext.Provider>
    );
}
