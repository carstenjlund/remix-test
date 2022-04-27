import { Link, useLoaderData } from "@remix-run/react";


export const loader = async ({params}) => {
let result = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    return result.json()
}
const userID = () => {
    const user = useLoaderData()
    console.log(user)

    return ( 
        <div>
            <h2>This is a test subpage....</h2>
            <p>{user.name}</p>
            <Link to="/users">Back</Link>
        </div>
     );
}
 
export default userID;