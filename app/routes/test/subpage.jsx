import { useLoaderData } from "@remix-run/react";

export const loader  = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await result.json()
    return data
}
const subpage = () => {
    const users = useLoaderData()
    console.log(users)
    return ( 
        <div>
            <h2>This is a test subpage....</h2>
        </div>
     );
}
 
export default subpage;