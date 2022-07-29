import { blogs, action } from "./types";
const initialBlogsState: blogs = {
    numberOfBlogs: 0,
    blogs: []
}


export const blogsReducer = (state: blogs = initialBlogsState, action: action): blogs => {

    switch (action.type) {
        case 'INCREMENT_BLOGS':
            return {
                ...state,
                numberOfBlogs: ++state.numberOfBlogs
            }
            break;
        default:
            return state
    }
}
