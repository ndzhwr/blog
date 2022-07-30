export { }
type BlogsCategoryStateType = {
    current: string
}
const initialBlogsCategoryState: BlogsCategoryStateType = {
    current: 'All'
}
7

const blogsCategoryReducer = (state: BlogsCategoryStateType, action: any): BlogsCategoryStateType => {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                current: action.categoryName
            }
            break;
        default:
            return state
    }
}