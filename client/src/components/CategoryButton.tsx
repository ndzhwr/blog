import React, { useEffect } from 'react'
import store from '../store'

type CategoryButtonProps = {
    name: string
    currentState: any[]
    setFilteredBlogs: React.Dispatch<React.SetStateAction<any[]>>
}

const CategoryButton: React.FC<CategoryButtonProps> = (data: CategoryButtonProps) => {
    const [amCurrent, setAmCurrent] = React.useState(false)
    const [cat, setCat] = React.useState('All')
    const state = store.getState()
    const currentCategory = state.blogs.currentCategory

    const unsubscribe = store.subscribe(() => {
        const category = store.getState().blogs.currentCategory
        setCat(category)
    }
    )

    const blogsFilter = () => {
        if (data.name == 'All') {
            data.setFilteredBlogs(data.currentState)
        } else {

            const filteredblogs = data.currentState.filter(blog => blog.category == data.name)
            data.setFilteredBlogs(filteredblogs)
        }
    }

    const changeCategory = () => {
        return {
            type: 'CHANGE_CURRENT_CATEGORY',
            payload: {
                name: data.name
            }
        }
    }

    const handleClick = (): void => {
        blogsFilter()
        store.dispatch(changeCategory())

    }

    useEffect(() => {
        if (data.name == currentCategory) {
            setAmCurrent(true)
        } else {
            setAmCurrent(false)
        }
    }, [cat])

    return (

        <>
            {amCurrent && <button className='bg-blue-100 py-2 px-4  text-sm  rounded-full  font-bold text-blue-500' onClick={handleClick}>{data.name}</button>}
            {!amCurrent && <button className='bg-gray-100 py-2 px-4  text-sm  rounded-full  text-gray-500' onClick={handleClick}>{data.name}</button>}
        </>
    )
}

export default CategoryButton