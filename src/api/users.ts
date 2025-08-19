import axios from "axios";
import type {AxiosResponse} from "../types/users.ts";
import type {PostProps} from "../types/users.ts";

export const getData = async (url: string) => {
    const response: AxiosResponse = await axios.get(url)
    return response.data

}
export const postUser = async (newUser: PostProps) => {
    const res: AxiosResponse = await axios.post('/api/users', newUser);
    return res.data;
};