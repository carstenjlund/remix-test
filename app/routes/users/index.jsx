import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";

export const loader = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    return result.json()
}
const users = () => {
    const users = useLoaderData()

    return ( 
        <div>
            <h2>This is the users page....</h2>
            {users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
            <p>{user.name}</p>
            </Link>
            ))}
        </div>
     );
}
 
export default users;