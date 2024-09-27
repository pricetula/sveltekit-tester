import { json } from '@sveltejs/kit';

export async function GET(req: Request) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return json(posts);
}