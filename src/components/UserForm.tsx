import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postUser} from "../api/users.ts";
import Input from "./UI/Input/Input.tsx";
import Button from "./UI/Button/Button.tsx";



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
            <div className="flex flex-col items-center mt-20 gap-4 w-full">
                <div className="w-3/5">
                    <Input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full"
                    />
                </div>
                <div className="w-3/5">
                    <Input
                        type="text"
                        placeholder="Роль"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full"
                    />
                </div>
                <Button
                    onClick={handleSubmit}
                    className="text-white bg-blue-500 hover:bg-blue-600"
                >
                    Добавить пользователя
                </Button>
            </div>


        </div>
    );
};

export default UserForm;