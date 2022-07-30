import { blogs } from "./blog.type"
import { user } from "../reducers/profile/types"

export type RootReducer = {
    blogs : blogs ,
    profile  : user ,
}

