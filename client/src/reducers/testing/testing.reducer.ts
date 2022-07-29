type state = {
    name: string,
    title: string
}

const initialState  = {
    name : 'Ivan Evie',
    title : 'marshar'
}

export const testingReducer = (state: state = initialState, action: any) : state => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload.name
            }
        default:
            return state
    }
}