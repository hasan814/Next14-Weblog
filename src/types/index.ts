
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface BlogPageProps {
    posts: PostProps[]
}