import { blogsReducer , profileReducer } from "./reducers";
import { RootReducer } from "./types/rootreducer.type";
let  state : RootReducer

export const rootReducer = (state : RootReducer ,action : any ) => {
    return  {
        blogs : blogsReducer(state.blogs, action) ,
        profile : profileReducer(state.profile, action)
    }
}  