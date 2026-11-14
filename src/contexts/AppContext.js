import React, { useEffect, useReducer } from "react";
import { ACCOUNT_DETAILS_SCREEN, SIGN_IN_SCREEN, SET_ERROR_MESSAGE, SET_SCREEN, SET_IS_LOADING } from "../utilities/Constants";
import { getSubjects } from "../database/Supabase";
import reducer from "../utilities/Reducer";

export const AppContext = React.createContext();

export const AppProvider = ( {children} ) => {
    const [appState, dispatch] = useReducer(reducer, {
        screen: ACCOUNT_DETAILS_SCREEN,
        email: "",
        password: "",
        isLoading: false
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

    useEffect(() => {
        async function loadFunc() {
            try {
                setLoading(true);
                let subjects = await getSubjects();
                console.log("subjects", subjects);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
        loadFunc();
    }, []);

    return (
        <AppContext.Provider value={contextObject}>
            {children}
        </AppContext.Provider>
    );
}
