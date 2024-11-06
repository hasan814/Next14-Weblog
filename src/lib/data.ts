import { PostProps } from "@/types";

const users = [
    { id: '1', name: "Alice Johnson" },
    { id: '2', name: "Bob Smith" },
    { id: '3', name: "Charlie Brown" },
    { id: '4', name: "Diana Adams" },
    { id: '5', name: "Evan Lee" },
    { id: '6', name: "Fiona White" },
    { id: '7', name: "George Clark" },
    { id: '8', name: "Hannah Davis" },
    { id: '9', name: "Ian Black" },
    { id: '10', name: "Jenna Green" }
];


const posts = [
    {
        id: '1',
        title: "Understanding JavaScript Closures",
        body: "Closures are a fundamental concept in JavaScript that allow functions to access variables from an enclosing scope.",
        userId: '1'
    },
    {
        id: '2',
        title: "A Guide to Flexbox in CSS",
        body: "Flexbox is a CSS layout model that enables a flexible way to align and distribute space among items in a container.",
        userId: '2'
    },
    {
        id: '3',
        title: "Mastering Asynchronous JavaScript",
        body: "Asynchronous programming allows JavaScript to perform tasks without blocking the main thread, improving performance.",
        userId: '3'
    },
    {
        id: '4',
        title: "Introduction to React Hooks",
        body: "React Hooks enable you to use state and lifecycle features in functional components, making them more powerful and reusable.",
        userId: '4'
    },
    {
        id: '5',
        title: "Building RESTful APIs with Node.js",
        body: "Node.js makes it easy to create RESTful APIs with its robust set of libraries and frameworks like Express.",
        userId: '1'
    },
    {
        id: '6',
        title: "Understanding TypeScript for JavaScript Developers",
        body: "TypeScript provides static typing for JavaScript, helping catch errors early and making code more maintainable.",
        userId: '2'
    },
    {
        id: '7',
        title: "A Deep Dive into CSS Grid",
        body: "CSS Grid is a powerful layout system that enables complex layouts with minimal code, ideal for responsive design.",
        userId: '3'
    },
    {
        id: '8',
        title: "Managing State in React with Redux",
        body: "Redux is a state management library that works well with React for handling complex application states.",
        userId: '4'
    },
    {
        id: '9',
        title: "Getting Started with Next.js",
        body: "Next.js is a popular React framework that offers server-side rendering and static site generation for fast performance.",
        userId: '1'
    },
    {
        id: '10',
        title: "Deploying Your App to Vercel",
        body: "Vercel makes it simple to deploy and manage applications with its seamless integration with Next.js and other frameworks.",
        userId: '2'
    }
];


export const getDatas = async () => {
    return posts
}
export const getData = async (id: string) => {
    return posts.find((post) => post.id === id)
}
export const getUser = async (id: string) => {
    return users.find((user) => user.id === id)
}