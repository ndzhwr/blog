import { Action, user } from "./types"
const initialUserState: user = {

    username: "",
    profile: "",
    followers: 4,
    bio: "",
    social_medias: {
        github: "",
        linkedin: "",
        stackoverflow: "",
        instagram: "",
        facebook: ""
    }
}


export const profileReducer = (state: user = initialUserState, action: Action): user => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                username: action.payload.username

            }
            break;
        default:
            return state
    }


}