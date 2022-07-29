type Blog = {
    title: string ,
    author : String ,
    description : String ,
    content : string ,
    likes : number ,
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
    numberOfBlogs : number ,
    blogs : Blog[]
}