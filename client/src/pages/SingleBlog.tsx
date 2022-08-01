import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Sidenavbar from '../components/Sidenavbar'
import ReactMarkdown from 'react-markdown'

type DataToFetch = {
    id: string,
    image: string,
    title: string
    description: string
    content: string

}

const SingleBlog: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = React.useState<DataToFetch>({} as DataToFetch)
    React.useEffect(() => {

        const fetcher: any = async () => {
            try {
                const res = await axios.get(`http://localhost:7777/blogs/${id}`)
                setData(res.data)
                console.log(res)
                res.status == 404 ? navigate('/notfound') : setData({ ...res.data })

            } catch (error) {
                console.log(" Error " + error)
                navigate("*")
            }
        }

        fetcher();
        console.log(data)

    }, [])
    const contentArea: HTMLElement | null = document.getElementById('contentPlace')
    if (contentArea != null)
        contentArea.innerHTML = data.content


    return (

        <div className="h-screen flex">

            <Sidenavbar current='blogs' />
            <div className="content grid grid-cols-4 w-full">

                <div className="blog-container col-start-1 col-end-4 p-10 border">
                    <img src="" alt="" className='w-full h-60 rounded-md ' />
                    <h1 className='font-bold text-xl mb-2'>{JSON.stringify(data.description)}</h1>
                    <p className=' text-sm  text-[#c4c4c4] mb-4'>{data.description}</p>
                    <div className="text-md font-regular" id='contentPlace'>

                        <ReactMarkdown>
                            {data.content}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className='col-start-4 col-end-5'>

                </div>
            </div>
        </div>
    )
}

export default SingleBlog