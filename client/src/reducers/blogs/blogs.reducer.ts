import { blogs, action } from "../../types/blog.type";
const initialBlogsState: blogs = {
    currentCategory : 'All' ,
    numberOfBlogs:0,
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
        case 'CHANGE_CURRENT_CATEGORY' : 
            return {
                ...state ,
                currentCategory : action.payload.name
            }
        default:
            return state
    }
}
