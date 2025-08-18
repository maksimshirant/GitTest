
import './App.css'
import {useQuery} from "@tanstack/react-query";
import axios from 'axios';


interface PostProps {
    userId?: string,
    id: number,
    title: string,
    body: string,
}

const getData = async (url: string) => {
        const response = await axios.get(url)
        return response.data

}

function App() {

    const {data, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: () => getData('https://jsonplaceholder.typicode.com/posts')
    })
  return (

   <div>
       {!isLoading ? (data.map((post: PostProps) => (
           <div className='post_container'>
               <div key={post.id}>{post.id}.</div>
               <div className='post_text_container'>
                   <div>{post.title}</div>
               </div>

           </div>

       ))) : (<div>Нет постов...</div>)
       }
   </div>
  )
}

export default App
