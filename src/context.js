import { useReducer, createContext } from "react";

// create a context 
export const ThemeContext = createContext();
// seting an intial state 
const INTIAL_STATE = { darkMode: false };
//to change the state we need a reducer --
const themeReducer = (state, action) => {
    // write the action and according to the action we are switching into dark mode
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode }; // if toggled then darkmode will opposite of real sate darkmode . 
        default:
            return state;
    }
};

//create and export our theme Provider 
export const ThemeProvider = (props) => {
    // use useReducer hook
    const [state, dispatch] = useReducer(themeReducer, INTIAL_STATE);

    // now return provider tag 

    return (
        // here exporting the values state-- INTIAL_STATE  and dispatch comes from useReducer
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    );

};

