export interface PostProps {
    id?: number,
    title: string,
    name: string
}
export interface AxiosResponse {
    data: PostProps[]
}