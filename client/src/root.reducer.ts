import { blogsReducer, profileReducer } from "./reducers";
import { RootReducer } from "./types/rootreducer.type";
import { combineReducers } from 'redux'
import { testingReducer } from "./reducers/testing/testing.reducer";



export const  rootReducer = combineReducers({
    blogs : blogsReducer ,
    profile : profileReducer ,
    regis : testingReducer
})