
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface BlogPageProps {
    posts: PostProps[]
}

export interface SinglePostPage {
    post: PostProps
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string
}

export interface PostUserProps {
    userId: number
}
