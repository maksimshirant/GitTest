import {useQuery} from "@tanstack/react-query";
import type {PostProps} from "../types/users.ts";
import {getData} from "../api/users.ts";


const UserList = () => {
    const {data, isLoading, isError} = useQuery<PostProps[]>({
        queryKey: ['users'],
        queryFn: () => getData("/api/users"),
        staleTime: 1000 * 60 * 5,
    })


    if (isLoading) return <div>Загрузка пользователей...</div>;
    if (isError) return <div>Ошибка при загрузке данных</div>;
    return (
        <div>
            {data?.map((user) => (
                <div className="post_container" key={user.id}>
                    <div>{user.name}:</div>
                    <div className="post_text_container">{user.title}</div>
                </div>
            ))}
        </div>
    );
};

export default UserList;