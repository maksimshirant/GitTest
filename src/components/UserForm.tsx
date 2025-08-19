import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postUser} from "../api/users.ts";


const UserForm = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: postUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    })

    const handleSubmit = () => {
        if (!name || !title) return;
        mutation.mutate({ name, title });
        setName('');
        setTitle('');
    };
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
                <button onClick={handleSubmit}>
                    Добавить пользователя
                </button>
            </div>
        </div>
    );
};

export default UserForm;