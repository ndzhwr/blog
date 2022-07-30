export type Blog = {
    title: string ,
    author : String ,
    description : String ,
    content : string ,
    likes : number ,
    category : string ,
    comments : [
        user : {
            username : string ,
            profile  : string
        },
        comment : string
    ]
}

export type action = {
  type : string ,
  payload : any
}

export type blogs = {
    currentCategory : string
    numberOfBlogs : number ,
    blogs : Blog[]
}