export async function load({ fetch }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
    return { props: { users } };
}
