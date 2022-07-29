import { blogs } from "../reducers/blogs/types"
import { user } from "../reducers/profile/types"

export type RootReducer = {
    blogs : blogs ,
    profile  : user
}

