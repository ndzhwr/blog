import React, { useEffect } from 'react'
import store from '../store'

type CategoryButtonProps = {
    name: string,
}

const CategoryButton: React.FC<CategoryButtonProps> = (data: CategoryButtonProps) => {
    const [amCurrent, setAmCurrent] = React.useState(false)
    const [cat, setCat] = React.useState('All')
    const state = store.getState()
    const currentCategory = state.blogs.currentCategory

      const unsubscribe = store.subscribe(() => {
        const category = store.getState().blogs.currentCategory
        setCat(category)
        console.log('State after dispatch: ', store.getState())
    }
    )

    const changeCategory = () => {
        return {
            type: 'CHANGE_CURRENT_CATEGORY',
            payload: {
                name: data.name
            }
        }
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
            {amCurrent && <button className='bg-blue-100 py-2 px-4   rounded-full  text-blue-500' onClick={() => store.dispatch(changeCategory())}>{data.name}</button>}
            {!amCurrent && <button className='bg-gray-100 py-2 px-4   rounded-full  text-gray-500' onClick={() => store.dispatch(changeCategory())}>{data.name}</button>}
        </>
    )
}

export default CategoryButton