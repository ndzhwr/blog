import { Blog } from '../types'
/**
 * An custom hook for categorizing blogs 
 * @param blogs An array of blogs that is going to be filtered
 * @param category The needed category of blogs
 * @returns An array of blogs which are in the given category
 */
export  const  useCategory  = (blogs: Blog[], category : string ) : Blog[] => {
    return blogs.filter(blog => blog.category == category)
    
 }

