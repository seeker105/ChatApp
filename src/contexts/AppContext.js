import React, { useReducer } from "react";
import SignInScreen from "../screens/SignInScreen";

export const AppContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case SET_SCREEN: {
            let screen = {
                "signInScreen": <SignInScreen />
            }[action.payload] || <SignInScreen />
            return {
                ...state,
                screen: screen
            };
        }
        default: return state;
    };
}

export const AppProvider = ( {children} ) => {
    const [appState, dispatch] = useReducer(reducer, {
        screen: <SignInScreen />,
        email: "",
        password: ""
    });

    const contextObject = {
        appState: appState,
        dispatch: dispatch
    };

    return (
        <AppContext.Provider value={contextObject}>
            {children}
        </AppContext.Provider>
    );
}
