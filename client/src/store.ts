import { createStore } from "redux";
import { rootReducer } from "./root.reducer";

let preLoadedState


preLoadedState = await Promise.all(["http://localhost:7777/user", "http://localhost:7777/blogs"])
    .then(([user, blogs]) => {
        return {
            user: JSON.parse(user),
            blogs: JSON.parse(blogs)
        }
    }).catch((e) => {
        // window.alert(e)
    })


const store = createStore(rootReducer)

export default store