import { http, HttpResponse } from 'msw';
import {setupWorker} from "msw/browser";
import { nanoid } from 'nanoid'

interface MockResponse {
    id: string;
    name: string;
    title: string;
}

interface CreateUserRequest {
    name: string;
    title: string;
}

const users: MockResponse[] = [
    { id: '1', name: 'Максим', title: 'Frontend Developer' },
    { id: '2', name: 'Аня', title: 'Backend Developer' },
    { id: '3', name: 'Иван', title: 'Fullstack Developer' },
];

export const worker = setupWorker(
    http.get('/api/users', () => {
        return HttpResponse.json<MockResponse[]>(users);
    }),
    http.post('/api/users', async ({request}) => {
        const { name, title} = ( await request.json()) as CreateUserRequest;
        const newUser: MockResponse = {
            id: nanoid(),
            name,
            title,
        };
        users.push(newUser);

        return HttpResponse.json<MockResponse>(newUser, { status: 201 });

    })
);


