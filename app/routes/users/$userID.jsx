import { Link, useLoaderData } from "@remix-run/react";


export const loader = async ({params}) => {
    
let result = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)
    return result.json()
}
const userID = () => {
    const user = useLoaderData()

    return ( 
        <div>
            <h2>This is a a user subpage</h2>
            <p><small>It displays information about the user based on the id in the url.</small></p>
            <br />
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            
            <Link to="/users">Back to users page</Link>
        </div>
     );
}
 
export default userID;