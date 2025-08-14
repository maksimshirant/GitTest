
import './App.css'
import {useQuery} from "@tanstack/react-query";
import axios from 'axios';


interface PostProps {
    userId?: string,
    id: number,
    title: string,
    body: string,
}

function App() {

    const {data, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data
        }
    })
  return (

   <div>
       {!isLoading ? (data.map((post: PostProps) => (
           <div>
               <div key={post.id}>{post.id}</div>
               <div>
                   <div>{post.title}</div>
                   <div>{post.body}</div>
               </div>

           </div>

       ))) : (<div>Нет постов...</div>)
       }
   </div>
  )
}

export default App
