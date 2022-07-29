
export type user = {
        username : string  ,
        profile : string ,
        followers : number ,
        bio : string ,
        social_medias? : {
            github? : string  ,
            linkedin? : string ,
            stackoverflow? : string ,
            instagram? : string ,
            facebook? : string
        }

}


export type Action = {
    type : string ,
    payload : any
}