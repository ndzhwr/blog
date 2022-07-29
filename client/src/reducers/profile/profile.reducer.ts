import { Action, user } from "./types"
const initialUserState: user = {

    username: "string",
    profile: "string",
    followers: 4,
    bio: "string",
    social_medias: {
        github: "string",
        linkedin: "string",
        stackoverflow: "string",
        instagram: "string",
        facebook: "string"
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