import { PostProps } from "@/types";

export const getDatas = async (): Promise<PostProps[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    });
    if (!response.ok) throw new Error("Something went wrong");
    return response.json();
};


export const getData = async (slug: string) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${slug}`
    );
    if (!response.ok) throw new Error("Something went wrong");
    return response.json();
};


export const getUser = async (userId: number) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { cache: "no-store" }
    );
    if (!response.ok) throw new Error("Something went wrong");
    return response.json();
};
