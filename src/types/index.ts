
export interface PostProps {
    userId: number;
    slug: string;
    title: string;
    desc: string;
    img: string;
    createdAt: Date
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
    userId: string
}
