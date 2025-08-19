
import './App.css'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from 'axios';
import {useState} from "react";


interface PostProps {
    id: number,
    title: string,
    name: string
}

const getData = async (url: string) => {
        const response = await axios.get(url)
        return response.data

}
const postUser = async (newUser: { name: string; title: string }) => {
    const res = await axios.post('/api/users', newUser);
    return res.data;
};

function App() {
    const queryClient = useQueryClient();
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');


    const {data, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: () => getData("/api/users"),
        staleTime: 1000 * 60 * 5,
    })

    const mutation = useMutation({
        mutationFn: postUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
  return (

<div>
    <div style={{ marginTop: '20px' }}>
        <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="text"
            placeholder="Роль"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => mutation.mutate({ name, title })}>
            Добавить пользователя
        </button>
    </div>
  {isLoading
    ? <div>Нет постов...</div>
    : data.map((post: PostProps) => (
        <div className='post_container' key={post.id}>
          <div>{post.name}:</div>
          <div className='post_text_container'>
            <div>{post.title}</div>
          </div>
        </div>
      ))
  }

</div>
  )
}

export default App
