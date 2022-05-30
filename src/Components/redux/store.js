import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    // user: userReducer,
    form: formReducer
})

// const persistedState = localStorage.getItem('reduxState')
//     ? JSON.parse(localStorage.getItem('reduxState'))
//     : {}
//
// if (localStorage.getItem('reduxState') ){
//     if (persistedState.user !== undefined){
//         persistedState.user.isLoggedIn = true;
//     }
//     persistedState.user.user = undefined;
// }

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppState = ReturnType
